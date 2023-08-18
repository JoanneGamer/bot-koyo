module.exports = [{
    type: "guildLeave",
    channel: "1097605699917328455", // or you can use $systemChannelID, it won't work if the server does not have set an channel for it
    code: `
    $description[Me sacaron del severvidor \`$guildName[$guildID]\`
    ID del servidor: \`$guildID\`
    Owner: \`$username[$ownerID]\`]
    $color[#ffffff]`
    }]