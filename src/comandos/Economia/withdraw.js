module.exports = [{
  name: "withdraw",
  aliases: ["retirar", "with"],
  $if: "old",
  code: `
      $if[$checkContains[$toLowerCase[$message];all]==true]
       $reply[$messageID;true]  
       $title[Retirado]
        $thumbnail[$userAvatar[$authorID]]
        $color[#ffffff]
        $description[¡$username, has retirado todo tu dinero del banco!]
        $footer[💵 Saldo Actual: $numberSeparator[$sum[$getGlobalUserVar[coin];$getGlobalUserVar[bank]]] | 🏦 Saldo en el Banco: $numberSeparator[$getGlobalUserVar[bank]]]
        $setGlobalUserVar[bank;0;$authorID]
        $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$getGlobalUserVar[bank]];$authorID]
        $onlyIf[$getGlobalUserVar[bank;$authorID]>0;¡No hay nada que retirar!]
      $else
        $reply[$messageID;true]
        $title[Retirado]
        $thumbnail[$userAvatar[$authorID]]
        $color[#ffffff]
        $description[¡$username, has retirado $$numberSeparator[$message] del banco!]
        $footer[💵 Saldo Actual: $numberSeparator[$sum[$getGlobalUserVar[coin;$authorID];$message]] | 🏦 Saldo en el Banco: $numberSeparator[$sub[$getGlobalUserVar[bank;$authorID];$message]]]
        $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$message];$authorID]
        $setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID];$message];$authorID]
        $onlyIf[$isNumber[$message[1]]==true;:x: Eso no es un número.]
        $onlyIf[$message[1]>0;¿Es encerio?]
        $onlyIf[$message<=$getGlobalUserVar[bank;$authorID];No puedes retirar más de lo que tienes en tu cuenta bancaria]
        $onlyIf[$getGlobalUserVar[bank;$authorID]>0;¡No hay nada que retirar!]
        $argsCheck[>0;Debes proporcionar una cantidad especifica para retirar dinero. Ejemplo: $getGuildVar[prefix]with 10]
    $endIf
      $globalCooldown[6s;Oye <@$authorID>, vamos muy rápido. Por favor, espera %time% para volver a ejecutar este comando.]
      $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
      razon: **$getglobaluservar[rblacklist]**
      Si crees que fue un error comunicate con un **administrador**.]
    `
    }]