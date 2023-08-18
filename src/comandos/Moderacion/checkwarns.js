module.exports = ({
    name: "checkwarn",
    code: `$author[Warn System;$userAvatar[$mentioned[1]]
$addField[Advertencias:;**$getUserVar[warn;$mentioned[1]]**]
$color[Red]

$onlyIf[$mentioned[1]!=$authorID;Otro administrador tiene que hacer esto por ti.]
 $onlyIf[$mentioned[1]!=$clientID;Upa, no puedes hacer eso.]
$onlyIf[$isBot[$findMember[$message]]==false;No puedes hacer eso]
$onlyIf[$isMentioned[$mentioned[1]]==true;Necesitas mencionar a alguien para ver sus advertencias.]

$onlyIf[$mentioned[1]!=;**¡Necesitas mencionar a alguien!**]
$onlyPerms[kickmembers;**No tienes el permiso kick!**]

$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
})