module.exports = [{ 
  name: "daily",
  code: `
$setGlobalUserVar[cofre;$sum[$getGlobalUserVar[cofre;$authorID];2];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[#ffffff]]
$title[Recompensa de diaria]
$description[En hora buena $username! Has reclamado \`[ID: 32]\` <:cofre:1086644667753431081> **Cofre** (x2)]
$footer[Para abrir usa $getServerVar[prefix]usar-daily]
$globalCooldown[12h;<:reloj:1086381550662332619> Por favor espere **%time%** Para volver a reclamar su recompensa!]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
}]