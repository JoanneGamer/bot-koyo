module.exports =({
    name: "pay",
    aliases: ["pagar"],
    code: `
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$mentioned[1]];$message[1]];$mentioned[1]]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];$message[1]];$authorID]
    $reply[$messageID;true]
    $title[💵 ¡Pago echo!]
    $description[Haz depositado $$message[1] a $username[$mentioned[1;true]]]
    $thumbnail[$userAvatar[$authorID]]
    $color[#ffffff]
    $footer[💵 Saldo Actual: $numberSeparator[$sum[$getGlobalUserVar[coin];$getGlobalUserVar[bank]]] | 🏦 Saldo en el Banco: $numberSeparator[$getGlobalUserVar[bank]]]
    $onlyIf[$message[1]<=$getGlobalUserVar[coin];No puedes dar más de lo que tienes.]
    $onlyIf[$getGlobalUserVar[coin]>0;¡No tienes nada en tu cartera!]
    $onlyIf[$mentioned[1]!=$authorID;No puedes pagarte a ti mismo.]
    $onlyIf[$mentioned[1]!=$clientID;No puedes pagarme. :(]
    $onlyIf[$isMentioned[$mentioned[1]]==true;Necesitas mencionar a alguien.]
    $argsCheck[>0; Necesitas poner un numero.]
    $globalCooldown[5s;<:reloj:1086381550662332619> <@$authorID> Espera %time% para ejecutar este comando.]
    $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
    `
})