module.exports = [{

name : "<@$clientID>",

aliases : "<@919308320433668126>",

nonPrefixed: true,

code: `$title[Información Sobre $username[$clientID];https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190]
$description[1;
> **Mis Características:**  
> **Cantidad de comandos:** \`$commandsCount.\`
> **Administración, Moderación, Diversión, Verificación...!**
> **Prepara tu Servidor con los Sistemas Automatizados.**
> **Evita Ataques gracias a los Sistemas de Protección.**
    
> **Como funciono?**
> **Use** \`$getGuildVar[prefix]cmd\` **para ver mis comandos y empezar a configurar!**
    
> **ESTADÍSTICAS:**
> **Cantidad de servidores:** \`$guildCount\` 
> **Tiempo en línea:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;week;semana];second;segundo];minute;minuto];hour;hora];day;día]\` Tiempo activo
> **Ping:** \`$pingms.\`
    $color[FFFFFF]
    $addButton[1;INVITE;5;https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190;no]
    $addButton[2;SUPPORT;5;https://discord.gg/Q8gs8geWK9;no]
$addButton[3;HOST;5;https://dash.dishost.cloud/;no]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`

}] 

