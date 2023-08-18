module.exports = [{
name:"talar",
code:`
$setGlobalUserVar[tronco;$sum[$getGlobalUserVar[tronco];$random[2;3]]]
$title[¡$username ha comenzado a recolectar troncos!]

$description[

Has talado un árbol y has recolectado \`[ID: 12]\` <:tronco:1086459175296565429> **Tronco(s)** (x$random[2;3])

$thumbnail[$randomText[https://media.discordapp.net/attachments/1084643821343740044/1086799503878787132/2ac45c2c17c9a19572ecf7233dbd426524594b53r1-640-359_hq.gif;https://media.discordapp.net/attachments/1084643821343740044/1086799504172404768/giphy.gif;https://media.discordapp.net/attachments/1084643821343740044/1086799504424042587/BewitchedObeseHeron-size_restricted.gif]]
]
$addTimeStamp
$color[#ffffff]
$globalCooldown[8m;<:reloj:1086381550662332619> <@$authorID> Espera %time% para ejecutar este comando.]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
}]