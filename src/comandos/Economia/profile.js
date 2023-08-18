module.exports = [{
name: "profile",
aliases: "perfil",
code: `
$thumbnail[1;$userAvatar[$mentioned[1]]]
$title[**Perfil de $username[$mentioned[1]]**]
$color[0CE7E7]
$description[
<:XP:1086431382705815643> **XP**: $numberSeparator[$getGlobalUserVar[xp;$mentioned[1]]]

**Estadísticas**
**hug**:
**Reputación**:
<:__:1086688908378636338> **Muertes**:

**Logros**
🛡🛡🛡🛡🛡...

**Inventario**
<:Minecoin:1086305147178729653> **Coin:** $numberSeparator[$getGlobalUserVar[coin;$mentioned[1]]] 
<:banco:1086437439771529246> **Banco**: $numberSeparator[$getGlobalUserVar[bank;$mentioned[1]]] 
<:mesadecrafteo:1086436383742230629> **Items**: $numberSeparator[$getGlobalUserVar[items;$mentioned[1;true]]] ] 
$onlyIf[$isBot[$findMember[$message]]==false;❌ Los bots no poseen perfil. >.<]

$globalCooldown[5s;<:reloj:1086381550662332619> <@$authorID> Espera %time% para ejecutar este comando.]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
 `
}]  
