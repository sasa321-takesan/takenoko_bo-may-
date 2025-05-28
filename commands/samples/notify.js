import {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ChannelSelectMenuBuilder,
} from "discord.js";

import Sequelize from "sequelize";

import Notification from "../../models/notification.mjs";

export const data = new SlashCommandBuilder()
  .setName("notify")
  .setDescription(
    "ボイスチャンネルに人が入ったときに、通知するよう設定できるよ～"
  )
  .addSubcommand((subcommand) =>
    subcommand.setName("status").setDescription("コマンドを実行したチャンネルのボイスチャンネル入室通知の設定を確認するよ～")
  )
  .addSubcommand((subcommand) =>
    subcommand.setName("list").setDescription("サーバー内のすべてのボイスチャンネル入室通知の設定を確認するよ～")
  )
  .addSubcommand((subcommand) =>
    subcommand.setName("configure").setDescription("ボイスチャンネル入室通知を設定するよ～")
  )
  .addSubcommand((subcommand) =>
    subcommand.setName("delete").setDescription("ボイスチャンネル入室通知の設定を削除するよ～")
  );

export async function execute(interaction) {
  const subcommand = interaction.options.getSubcommand();

  if (subcommand == "status") {
    const notifications = await Notification.findAll({
      where: {
        guildId: interaction.guildId,
        textChannelId: interaction.channelId,
      },
    });

    if (notifications.length == 0) {
      await interaction.reply("設定は見つかりませんでした。");
      return;
    }

    const channelsArr = notifications.map(n => `・<#${n.voiceChannelId}>`);

    const channels = channelsArr.join("\n");

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(`<#${interaction.channelId}> でチェック中のボイスチャンネル`)
      .setDescription(channels);

    await interaction.reply({
      content: "",
      embeds: [embed],
    });
  } else if (subcommand == "list") {
    const notificationTextChannels = await Notification.findAll({
      where: {
        guildId: interaction.guildId,
      },
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('textChannelId')) ,'textChannelId'],
      ]
    });

    if (notificationTextChannels.length == 0) {
      await interaction.reply("設定は見つかりませんでした。");
      return;
    }

    const embeds = await Promise.all(
      notificationTextChannels.map(async n => {
        const notifications = await Notification.findAll({
          where: {
            guildId: interaction.guildId,
            textChannelId: n.textChannelId,
          },
        });
        const channelsArr = notifications.map(n => `・<#${n.voiceChannelId}>`);
        const channels = channelsArr.join("\n");

        return new EmbedBuilder()
          .setColor(0x0099ff)
          .setTitle(`<#${n.textChannelId}> に通知を送信するボイスチャンネル`)
          .setDescription(channels);
      })
    );

    await interaction.reply({
      content: "",
      embeds: embeds,
    });
  } else if (subcommand == "configure") {
    try {
      const voiceChannelSelect = new ChannelSelectMenuBuilder()
        .setCustomId("selectVoiceChannel")
        .setChannelTypes("GuildVoice")
        .setMaxValues(20);

      const notifications = await Notification.findAll({
        where: {
          guildId: interaction.guildId,
          textChannelId: interaction.channelId,
        },
      });

      if (notifications.length != 0) {
        notifications.map((n) =>
          voiceChannelSelect.addDefaultChannels(n.voiceChannelId)
        );
      }

      const voiceChannelrow = new ActionRowBuilder().addComponents(voiceChannelSelect);

      const response = await interaction.reply({
        content:
          "チェックしたいボイスチャンネルを選んでください（メニューを閉じて確定）",
        components: [voiceChannelrow],
      });

      const collectorFilter = (i) => i.customId === "selectVoiceChannel" && i.user.id === interaction.user.id;

      const collector = response.createMessageComponentCollector({
        collectorFilter,
        time: 30000,
      });

      collector.on("collect", async (collectedInteraction) => {
        await Notification.destroy({
          where: {
            textChannelId: interaction.channelId,
          },
        });
        const channelsArr = await Promise.all(
          collectedInteraction.values.map(async (voiceChannelId) => {
            await Notification.create({
              guildId: interaction.guildId,
              voiceChannelId: voiceChannelId,
              textChannelId: interaction.channelId,
            });
            return "<#" + voiceChannelId + ">";
          })
        );

        const channels = channelsArr.join("\n");

        const embed = new EmbedBuilder()
          .setColor(0x5cb85c)
          .setTitle(`<#${interaction.channelId}> に通知を送信するボイスチャンネル`)
          .setDescription(channels);

        await collectedInteraction.update({
          content: `設定完了`,
          embeds: [embed],
          components: [],
        });
      });
    } catch (e) {
      await interaction.editReply({
        content: "時間切れ(もしくはエラー)",
        components: [],
      });
    }
  } else if (subcommand == "delete") {
    await Notification.destroy({
      where: {
        textChannelId: interaction.channelId,
      },
    });
    await interaction.reply("削除完了");
  }
}
