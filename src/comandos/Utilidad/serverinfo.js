module.exports = ({
    name: "serverinfo",
    aliases: [],
    $if: "old",
    code: `$title[**Información sobre el Servidor.**]
$description[
> **Server Name:** \`\`\`$GuildName\`\`\`
> **ID Del Servidor:** \`\`\`$guildID\`\`\`
> **Dueño:** \`\`\`$username[$ownerID]#$discriminator\`\`\`
> **Usuarios:** \`\`\`$membersCount\`\`\`
> **Bots:** \`\`\`$guildBotCount\`\`\`
> **Nivel de verificación:** \`\`\`$guildVerificationLevel\`\`\`
> **Canales en total:** \`\`\`$channelCount\`\`\`
> **Emojis:** \`\`\`$emojiCount[$guildId]\`\`\` 
> **Roles:** \`\`\`$roleCount\`\`\`
> **Boost:** \`\`\`$guildBoostCount\`\`\`]

$addTimestamp
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
})