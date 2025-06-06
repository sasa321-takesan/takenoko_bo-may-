import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('gacha')
    .setDescription('ガチャを引きます');

export async function execute(interaction) {
    const arr = [
        "SSR 金のたけのこ",
        "SR 銀のたけのこ",
        "R 銅のたけのこ",
        "N ただのたけのこ",
    ];
    const weight = [2, 4, 8, 16];
    let result = "";

    let totalWeight = 0;
    for (let i = 0; i < weight.length; i++) {
        totalWeight += weight[i];
    }
    let random = Math.floor(Math.random() * totalWeight);

    for (let i = 0; i < weight.length; i++) {
        if (random < weight[i]) {
            result = arr[i];
            break;
        } else {
            random -= weight[i];
        }
    }

    await interaction.reply(`${result} が当選しました！`);
}
