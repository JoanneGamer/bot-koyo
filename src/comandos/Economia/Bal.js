module.exports = [{
name: "balance",
aliases: [`mano`, `bal`], 
code: `$author[$username[$mentioned[1;true]] Balance;$userAvatar[$mentioned[1;true]]]
$description[
Coin(s) globales

**Coin**: **$numberSeparator[$getGlobalUserVar[coin;$mentioned[1;true]];main]** <:Minecoin:1086305147178729653>
**Banco**: **$numberSeparator[$getGlobalUserVar[bank;$mentioned[1;true]];main]** <:Minecoin:1086305147178729653>]
$color[#ffffff]
$globalCooldown[5s;<:reloj:1086381550662332619> <@$authorID> Espera %time% para ejecutar este comando.]
$onlyIf[$isBot[$findMember[$message]]==false;❌ Los bots no poseen perfil. >.<]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
}]
