module.exports = ({
    name: "suggest", 
    code: `
$deleteCommand
$title[!Nueva Sugerencia¡]
$description[**$message**]
$color[#ffffff]
$useChannel[$getGuildVar[sug]] 
$channelSendMessage[$channelID;La sugerencia fue enviada correctamente!]

$onlyIF[$getGuildVar[sug]<undefined;❌ | El canal de sugerencias no se ha establecido!.]
$suppressErrors[¡Error inesperado! Puedes probar esto para solucionar este error (Si no se solucione manda un reporte de esto)
1. Dar todos los permisos (puedes darme unicamente ADMINISTRADOR)
2. Poner mi rol arriba del todo.]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]


`
  }) 