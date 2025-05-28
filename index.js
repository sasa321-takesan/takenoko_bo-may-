
import { Client, GatewayIntentBits, Collection, REST, Routes } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname の代替定義（ES6モジュールでは使用不可のため）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Discordクライアントを作成
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// コマンドコレクションを作成
client.commands = new Collection();
const commands = [];

// コマンドファイルを読み込み
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = await import(filePath);
    if (command.data && command.execute) {
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
    }
}

// ボットが準備完了したときのイベント
client.once('ready', async () => {
    console.log(`${client.user.tag}としてログインしました！`);
    console.log(`${client.commands.size}個のコマンドを読み込みました。`);
    
    // スラッシュコマンドを登録
    const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN);
    
    try {
        console.log('スラッシュコマンドを登録中...');
        
        // グローバルコマンドとして登録
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands },
        );
        
        console.log('スラッシュコマンドの登録が完了しました！');
    } catch (error) {
        console.error('スラッシュコマンドの登録でエラーが発生しました:', error);
    }
});

// スラッシュコマンドのインタラクションを処理
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = client.commands.get(interaction.commandName);
    
    if (!command) {
        console.error(`${interaction.commandName}というコマンドは見つかりませんでした。`);
        return;
    }
    
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error('コマンド実行エラー:', error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'コマンドの実行中にエラーが発生しました。', ephemeral: true });
        } else {
            await interaction.reply({ content: 'コマンドの実行中にエラーが発生しました。', ephemeral: true });
        }
    }
});

// エラーハンドリング
client.on('error', console.error);

// ボットトークンでログイン
const token = process.env.DISCORD_BOT_TOKEN;
if (!token) {
    console.error('DISCORD_BOT_TOKENが設定されていません。Secretsタブでトークンを設定してください。');
    process.exit(1);
}

client.login(token);
