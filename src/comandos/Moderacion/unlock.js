module.exports = ({
name: "unlock",
$if: "v4",
code: `$title[<:channel:1097247852587139193> ┃Canal desbloqueado con Exito!]
$color[#ffffff]
$footer[Canal desbloqueado por: $username#$discriminator]
$addTimestamp
$modifyChannelPerms[$channelID;$guildID;+sendmessages]
$onlyClientPerms[managechannels;:x_:┃No tengo el permiso: **MANAGE_CHANNEL**.]
$onlyPerms[managechannels;:x_:┃No tienes suficientes permisos. Permisos Faltantes: **MANAGE_CHANNEL**]
 $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

})