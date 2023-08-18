module.exports = ({
    name: "poll", 
    code: `$deletecommand 
$title[Encuesta] 
$description[ __$username inició una encuesta__

° Encuesta: 
$message

° Votos:

si | ✅

no | ❌

] 
$color[#ffffff] 
$thumbnail[$userAvatar[$authorID]]
$footer[Reacciona para votar!] 
$addClientReactions[❌;✅] 
$argsCheck[>0;Error | Por favor pon una encuesta!] 
$onlyPerms[managemessages;Necesitas el permiso de **managemessages**]
$suppressErrors[¡Error inesperado! Puedes probar esto para solucionar este error (Si no se solucione manda un reporte de esto)
    1. Dar todos los permisos (puedes darme unicamente ADMINISTRADOR)
    2. Poner mi rol arriba del todo.]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
   }) 