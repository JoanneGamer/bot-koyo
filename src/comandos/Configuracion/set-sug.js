module.exports = ({
    name: "set-suggest", 
    code: `
$description[<a:check_koyo:1095550375781748876> **El canal de sugerencias se a establecido.**]
$color[#ffffff]

$setGuildVar[sug;$mentionedChannels[1];$guildID;main]

$onlyIf[$guildChannelExists[$guildID;$mentionedChannels[1;yes]]==true;{newEmbed:{description: <a:x_koyo:1129625215807262780> **Este canal no existe en este servidor!**}{color: ffffff}}]

$onlyClientPerms[managechannels;{newEmbed:{description:<a:x_koyo:1129625215807262780> **No tengo el permiso de \`MANAGECHANNELS.\`}{color: ffffff}}]

$onlyPerms[managechannels;{newEmbed:{description:<a:x_koyo:1129625215807262780> **No tienes el permiso:** \`MANAGECHANNELS\`.}{color: ffffff}}]

$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]

`
   }) 