module.exports = ({
name: "lock",
$if: "v4",
code: `$title[<:channel:1097247852587139193> ┃Canal bloqueado con Exito!]
$footer[Canal bloqueado por: $username#$discriminator]
$addTimestamp
$color[#ffffff]
$modifyChannelPerms[$channelID;$guildID;-sendmessages]
$onlyClientPerms[managechannels;:x_:┃No tengo el permiso: **MANAGECHANNEL**.]
$onlyPerms[managechannels;:x_:┃No tienes suficientes permisos. Permisos Faltantes: **MANAGECHANNEL**]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

})