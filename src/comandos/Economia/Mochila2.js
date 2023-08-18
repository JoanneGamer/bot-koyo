module.exports = ({
name:"mochila 2",
aliases: [`inventario 2`, `bag 2`], 
code: `
$title[Mochila de $username[$mentioned[1]]]
$description[
En la mochila están todos los items que recolectes/craftees o compres.
\`para usar un ítem usa $getGuildVar[prefix]usar <item o ID>\`
**Lista de items**:

\`[ID: 32]\` <:cofre:1086644667753431081> **Cofre **(x$getGlobalUserVar[cofre;$mentioned[1;true]])
\`[ID: 34]\` <:picodepiedra:1086827890143932466> **Pico de piedra **(x$getGlobalUserVar[picodepidra;$mentioned[1;true]])
\`[ID: 35]\` <:espadadepiedra:1086828160311623791> **Espada de piedra **(x$getGlobalUserVar[espadadepiedra;$mentioned[1;true]])






$color[#ffffff]]]
$footer[Página 2/2]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
  })