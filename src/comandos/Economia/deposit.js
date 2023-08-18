module.exports = [{
  name: "deposit",
  aliases: ["dep", "depositar"],
  $if: "old",
  code: `
    $if[$checkContains[$toLowerCase[$message];all]==true]
      $reply[$messageID;true]  
      $title[Depositado]
      $thumbnail[$userAvatar[$authorID]]
      $color[#ffffff]
      $description[¡$username, has depositado todo tu dinero en el banco!]
      $footer[💵 Saldo Actual: $numberSeparator[$getGlobalUserVar[coin]] | 🏦 Saldo en el Banco: $numberSeparator[$sum[$getGlobalUserVar[bank];$getGlobalUserVar[coin]]]]
      $setGlobalUserVar[coin;0]
      $setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$getGlobalUserVar[coin]]]
      $onlyIf[$getGlobalUserVar[coin]>0;¡No hay nada que depositar!]
    $else
      $reply[$messageID;true]
      $title[Depositado]
      $thumbnail[$userAvatar[$authorID]]
      $color[#ffffff]
      $description[¡$username, has depositado $$numberSeparator[$message] en el banco!]
      $footer[💵 Saldo Actual: $numberSeparator[$sub[$getGlobalUserVar[coin];$message]] | 🏦 Saldo en el Banco: $numberSeparator[$sum[$getGlobalUserVar[bank];$message]]]
      $setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID];$message];$authorID]
      $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];$message];$authorID]
      $onlyIf[$isNumber[$message[1]]==true;:x: Eso no es un número.]
      $onlyIf[$message[1]>0;¿Es encerio?]
      $onlyIf[$message<=$getGlobalUserVar[coin];No puedes depositar más de lo que tienes en tu billetera]
      $onlyIf[$getGlobalUserVar[coin]>0;¡No hay nada que depositar!]
    $endIf
      $globalCooldown[6s;Oye <@$authorID>, vamos muy rápido. Por favor, espera %time% para volver a ejecutar este comando.]
      $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
      razon: **$getglobaluservar[rblacklist]**
      Si crees que fue un error comunicate con un **administrador**.]
`
  }]