import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('nyan')
  .setDescription('Botが返事します');

export async function execute(interaction){
    await interaction.reply('にゃ～ん');
}
