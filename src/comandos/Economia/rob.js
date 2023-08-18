module.exports = [{
  name: "rob",
  $if: "old",
  code: `
    $if[$random[1;100]<=50]
      $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$random[1;$getGlobalUserVar[coin;$findUser[$message]]]];$authorID]
      $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$findUser[$message]];$random[1;$getGlobalUserVar[coin;$findUser[$message]]]];$findUser[$message]]
      $description[¡Has logrado robar una cantidad de $$random[1;$getGlobalUserVar[coin;$findUser[$message]]] dinero a $userTag[$findUser[$message]]! 💰🥷]
      $color[#ffffff]
    $else
      $description[¡$userTag[$findUser[$message]] te ha descubierto intentando robar y $randomText[te ha dado una paliza;te dio una patada;te dejo lecionado]! 🚑]
      $color[Red]
    $endIf
      $globalCooldown[1s;¡Vaya, eso es demasiado pronto! Debes esperar %time% para intentar robar de nuevo.]
      $onlyIf[$getGlobalUserVar[coin;$findUser[$message]]>0;¡No puedes robar a un usuario con 0 de dinero!]
      $onlyIf[$mentioned[1]!=$authorID;¿Encerio quieres hacer eso? 🙃]
      $onlyIf[$mentioned[1]!=$clientID;¡No puedes robarme! >:(]
      $onlyIf[$isBot[$findMember[$message]]==false;No puedes hacer eso. >.<]
      $onlyIf[$isMentioned[$mentioned[1]]==true;Necesitas mencionar a alguien para robar. >.<]
    $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
    razon: **$getglobaluservar[rblacklist]**
    Si crees que fue un error comunicate con un **administrador**.]
  `}]
  