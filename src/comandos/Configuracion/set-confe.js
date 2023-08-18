module.exports = ({
    name: "set-confe", 
    code: `$description[<a:check_koyo:1095550375781748876> **El canal de confeciones se a establecido**]
$color[FFFFFF]

$setGuildVar[confe;$mentionedChannels[1]]

$onlyIf[$guildChannelExists[$guildID;$mentionedChannels[1;yes]]==true;{newEmbed:{description:<a:x_koyo:1129625215807262780> **Este canal no existe en este servidor.**}{color: ffffff}}]
$onlyPerms[managechannels;{newEmbed:{description:**No tienes el permiso MANAGECHANNELS**!}{color: FFFFFF}}]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]

`
   }) 