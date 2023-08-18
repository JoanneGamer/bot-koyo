module.exports = ({
    name: "reset-suggest", 
    code: ` 
$description[<a:check_koyo:1095550375781748876> **Se a reiniciado el canal de sugerencias.**] 
$resetGuildVar[sug] 
$color[#ffffff] 
$onlyPerms[managechannels;{newEmbed:{description:<a:x_koyo:1129625215807262780> **No tienes el permiso **MANAGECHANNELS**!.**}{color:ffffff}}]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
}) 