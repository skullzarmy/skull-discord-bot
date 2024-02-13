const { SlashCommandBuilder } = require("discord.js");
const { getPrice } = require("../../api/price");
const { getHolders } = require("../../api/holders");
const { stageTokenPost } = require("../../util/post");

const data = new SlashCommandBuilder()
    .setName("token-stats")
    .setDescription("Replies with $SKULL 💀 token statistics.");

const execute = async (interaction) => {
    const price = await getPrice();
    const [holders] = await getHolders();

    const post = stageTokenPost("$SKULL Token Stats 💀", {
        holders,
        price,
    });

    await interaction.reply(post);
};

module.exports = {
    data,
    execute,
};
