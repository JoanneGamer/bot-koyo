module.exports = ({
    name: "set-logs",
    code: `
$description[<a:check_koyo:1095550375781748876> **El canal de logs se establecio.**]
$color[#ffffff]

$setGuildVar[logs;$mentionedChannels[1];$guildID;main]

$onlyIf[$guildChannelExists[$guildID;$mentionedChannels[1;yes]]==true;{newEmbed:{description:<a:x_koyo:1129625215807262780> **Este canal no existe en este servidor.**}{color: ffffff}}]

$onlyClientPerms[managechannels;{newEmbed:{description: <a:x_koyo:1129625215807262780> **Necesio el permiso de \`MANAGECHANNELS.\`}{color: ffffff}}]

$onlyPerms[managechannels;{newEmbed:{description:<a:x_koyo:1129625215807262780> **Necesitas el permiso \`managechannels\`}{color:ffffff}}]

$suppressErrors

$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

})