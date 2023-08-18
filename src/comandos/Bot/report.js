module.exports = ({
name: "Reportbug",
aliases: ["Report-bug", "bug-report"],
code: `$useChannel[1094444195302879232]
$title[❌ | Bug reportado!]
$description[👤| Bug reportado por : $username[$authorID]#$discriminator[$authorID] 


🌐 | Reporte : $message


$channelSendMessage[$channelID;✅ | Bug reportado con éxito.]
$onlyIf[$checkContains[$message;@here;@everyone]==false;❌ | No menciones everyone ni here.]
$suppressErrors[❌ | Error inesperado.]
$onlyIf[$message!=;❌ | Escribe algo.]
$globalCooldown[5m;❌ | Espera %time% Para poder enviar nuevo reporte.]

$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
})