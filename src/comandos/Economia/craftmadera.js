module.exports = [{
    name: "craft-maderas",
    aliases:[`craft madera`,`craft maderas`],
    code: `

$setGlobalUserVar[madera;$sum[$getGlobalUserVar[madera;$authorID];4];$authorID]
$setGlobalUserVar[tronco;$sub[$getGlobalUserVar[tronco;$authorID];1];$authorID]

$editIn[3s;{newEmbed:{description:Se ha crafteado la <:madera:1086481417929752616> **madera** (x4).}{color:#ffffff}}]
$color[#ffffff]
$description[Estas crafteando palos.]
$thumbnail[$randomText[https://media.tenor.com/IA933dzxrIgAAAAM/aisacknoob23.gif;https://tenor.com/es/view/stick-bug-gif-18910704;]]
$onlyIf[$getGlobalUserVar[madera;$authorID]>4;
Materiales **necesarios** para craftear la <:madera:1086481417929752616> **madera** (x4)

<:tronco:1086459175296565429> **Tronco** (1/$numberSeparator[$getGlobalUserVar[tronco;$mentioned[1;true]]])

]
$globalCooldown[3s;<:reloj:1086381550662332619> <@$authorID> Si quieres craftear nuevamente necesitas esperar %time%]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
}]