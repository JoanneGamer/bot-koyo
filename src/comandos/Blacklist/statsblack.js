module.exports = ({
name: "statsblack",
code: `$author[Usuarios blacklisteados;$useravatar[$authorID]]
$addField[> Ultimo desblacklisteado;$getvar[lastunblacklist];yes]
$addField[> Ultimo blacklisteado;$getvar[lastblacklist];yes]
$addField[> Numero de usuarios en la blacklist;$getvar[numblacklist];yes]
$color[#ffffff]

$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
})