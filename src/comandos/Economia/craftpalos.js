module.exports = [{
    name: "craft-palos",
    aliases:[`craft palos`,`craft palo`],
    code: `

$setGlobalUserVar[palo;$sum[$getGlobalUserVar[palo;$authorID];4];$authorID]
$setGlobalUserVar[madera;$sub[$getGlobalUserVar[madera;$authorID];2];$authorID]

$editIn[3s;{newEmbed:{description:Se han crafteado los <:__:1086459806367363113> **palos**.}{color:#ffffff}}]
$color[#ffffff]
$description[Estas crafteando palos.]
$thumbnail[$randomText[https://media.tenor.com/IA933dzxrIgAAAAM/aisacknoob23.gif;https://tenor.com/es/view/stick-bug-gif-18910704;]]
$onlyIf[$getGlobalUserVar[madera;$authorID]>4;
Materiales **necesarios** para craftear los <:__:1086459806367363113> **Palo(s)** (x3)

<:madera:1086481417929752616> **Madera** (2/$numberSeparator[$getGlobalUserVar[madera;$mentioned[1;true]]])

]
$globalCooldown[3s;<:reloj:1086381550662332619> <@$authorID> Si quieres craftear nuevamente necesitas esperar %time%]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
}]