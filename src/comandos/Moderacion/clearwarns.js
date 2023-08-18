module.exports = ({

name: "clear-warns", 

code: `

$addTimestamp
$title[Clear Warns]
$color[33ff33]
$reply[$messageID;true]
$thumbnail[$userAvatar[$mentioned[1]]]
$setUserVar[warn;$sub[$getUserVar[warn;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$description[1;Borrastes $noMentionMessage warn(s) de <@$mentioned[1]>!!]
$onlyIf[$noMentionMessage<=$getUserVar[warn;$mentioned[1]];**¡Parece que está borrando más advertencias de las que tiene el usuario!**] 
$onlyIf[$mentioned[1]!=;**Necesitas mencionar a alguien para despejar la advertencia**]

$onlyIf[$mentioned[1]!=$authorID;**¡No puedes despejar las advertencias de ti mismo!**]

$onlyIf[$mentioned[1]!=$clientID;**¡No puedo aclarar las advertencias de mí mismo!**]



$onlyIf[$rolePosition[$userHighestRole[$authorID]]<=$rolePosition[$userHighestRole[$mentioned[1]]];**¡No puedes borrar las advertencias de un administrador!**]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<=$rolePosition[$userHighestRole[$mentioned[1]]];**No puedo borrar las advertencias de un administrador**]



$onlyIf[$isNumber[$noMentionMessage]==true;**¡Debe ingresar una cantidad de advertencias para borrar!**] 
$onlyPerms[kickmembers;**No tienes permiso de kick**]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

}) 