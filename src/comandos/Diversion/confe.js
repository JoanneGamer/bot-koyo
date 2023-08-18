module.exports = ({
name: "confe",
code: `
$title[**Confesión.**]
$thumbnail[https://media.discordapp.net/attachments/984582130619265064/985270431751753778/Anonymous_emblem.svg.png]
$description[\`$message.\`]
$footer[Confesión hecha por Anonymous]
$color[#00ff32]
$useChannel[$getGuildVar[confe]]
$argsCheck[>0;> **Escribe tu confesión.**]
$deleteCommand
$suppressErrors[¡Error inesperado! Puedes probar esto para solucionar este error (Si no se solucione manda un reporte de esto)
    1. Dar todos los permisos (puedes darme unicamente ADMINISTRADOR)
    2. Poner mi rol arriba del todo.]
$onlyIF[$getGuildVar[confe]<undefined;❌ | El canal de confeciones no se ha establecido!.]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`

})