
import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('サーバー情報を表示します');

export async function execute(interaction) {
    const serverInfo = `
**サーバー名:** ${interaction.guild.name}
**メンバー数:** ${interaction.guild.memberCount}
**作成日:** ${interaction.guild.createdAt.toDateString()}
**サーバーID:** ${interaction.guild.id}
`;
    
    await interaction.reply(serverInfo);
}
