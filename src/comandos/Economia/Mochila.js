module.exports = [{
name:"mochila",
aliases: [`inventario`, `bag`,`bag 1`,`inventario 1`],
code: `
$title[Mochila de $username[$mentioned[1]]]
$description[
En la mochila están todos los items que recolectes/craftees o compres.
\`para usar un ítem usa $getGuildVar[prefix]usar <item o ID>\`
**Lista de items**:

\`[ID: 7]\` <:manzana:1086481982306930728> **Manzana **(x$getGlobalUserVar[manzana;$mentioned[1;true]])
\`[ID: 9]\` <:picodemadera:1086459576133619772> **Pico de madera **(x$getGlobalUserVar[picodemadera;$mentioned[1;true]])
\`[ID: 10]\` <:espada_de_madera:1086460042192105472> **Espada de madera **(x$getGlobalUserVar[espadademadera;$mentioned[1;true]])
\`[ID: 12]\` <:tronco:1086459175296565429> **Tronco **(x$getGlobalUserVar[tronco;$mentioned[1;true]])
\`[ID: 14]\` <:mesadecrafteo:1086436383742230629> **Mesa de crafteo **(x$getGlobalUserVar[mesa;$mentioned[1;true]])
\`[ID: 18]\` <:__:1086459806367363113> **Palo **(x$getGlobalUserVar[palo;$mentioned[1;true]])
\`[ID:22]\` <:Roca:1086473961640038420> **Roca **(x$getGlobalUserVar[piedra;$mentioned[1;true]])
\`[ID: 26]\` <:madera:1086481417929752616> **Madera **(x$getGlobalUserVar[madera;$mentioned[1;true]])
\`[ID: 28]\` <:horno:1086638114447052810> **Horno **(x$getGlobalUserVar[horno;$mentioned[1;true]])
\`[ID: 30]\` <:carbon:1086644192136155196> **Carbón **(x$getGlobalUserVar[Carbón;$mentioned[1;true]])
]
$color[#ffffff]]]
$footer[Página 1/2]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
}]
