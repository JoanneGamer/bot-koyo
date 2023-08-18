module.exports = [{
    name: "avatar",
    aliases: ['av', 'usericon', 'pfp'],
    code: `$author[Avatar de $username[$findMember[$message]]]
    $description[Descargar avatar: [Click aquí]($get[owonya])]
    $image[$userAvatar[$findMember[$message]]]
    $color[#ffffff]
    $addButton[1;Descargar avatar;link;$nonEscape[$get[owonya]]]
    $wait[2s]
    $let[owonya;$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
}]