module.exports = [{
  name: "usar-cofre",
  aliases: [`usar cofre`],
code: `
$setGlobalUserVar[cofre;$sub[$getGlobalUserVar[cofre;$authorID];1];$authorID]
$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp];$random[10;50]]]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$random[100;250]]]
$setGlobalUserVar[picodepidra;$sum[$getGlobalUserVar[picodepidra];$random[5;10]]]
$thumbnail[$userAvatar[$authorID]]
$color[#ffffff]
$title[$username Ha abierto su <:cofre_abierto:1086644542528303224> cofre]
$description[
Has obtenido:

<:picodepiedra:1086827890143932466> **Pica de piedra** (x$random[5;10]).
<:Minecoin:1086305147178729653> +$random[100;250]. Coins
<:XP:1086431382705815643> **Experiencia** +$random[10;50].]
$color[#ffffff]
$onlyIf[$getGlobalUserVar[cofre;$authorID]>0;No tienes un <:cofre:1086644667753431081> **cofre** intenta usar \`$getGuildVar[prefix]daily\` para recibir tu Cofre diario y luego ejecuta este comando para abrirlo]

$globalCooldown[5s;<:reloj:1086381550662332619> <@$authorID> Espera %time% para ejecutar este comando.]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]

`
}]
