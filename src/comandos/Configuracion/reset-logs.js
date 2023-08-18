module.exports = ({
    name: "reset-logs", 
    code: `
$resetGuildVar[logs] 
$description[El canal de logs fue reiniciado correctamente!] 
$color[#ffffff] 
$onlyPerms[administrator;Necesitas ser **ADMIN** para esto!] 

$onlyIf[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
  }) 