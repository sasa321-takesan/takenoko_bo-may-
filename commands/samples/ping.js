import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong!で返事します');

export async function execute(interaction) {
    await interaction.reply('Pong!');
}
