module.exports = [{
    name: "help-ban", 
    code: `$title[HELP COMMANDS] 
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`BAN\`\`\`
Permisos requeridos por el usuario y bot: \`\`\`BAN\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Banea a un usuario o bot\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]ban {@usuario#0000}  <Spam al md>\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-unban", 
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`unban\`\`\`
Permisos requeridos por el usuario y bot: \`\`\`BAN, UNBAN\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Desbanea a un usuario con su ID\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]unban {ID}\`\`\` ]
$color[#ffffff] 
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
` 
},{
    name: "help-sos", 
    code:`$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`sos\`\`\`
Permisos requeridos por el usuario: \`\`\`ADMINISTRADOR\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`pide ayuda cuando estás en peligro\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-lock",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`lock\`\`\`
Permisos por el usuario y bot: \`\`\`MANAGECHANNELS\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Bloquea un canal para que los usuarios no puedan hablar\`\`\`] 
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.] 
`
},{
    name: "help-unlock", 
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`unlock\`\`\`
Permisos por el usuario y bot: \`\`\`MANAGE_CHANNELS\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Desbloquea un canal para que puedan hablar los usuarios\`\`\]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.] `
},{
    name: "help-antilinks",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antilinks\`\`\`
Permisos por el usuario y bot: \`\`\`Administrador (para el usuario es para activar y desactivar, para el Bot es para que borre los links)\`\`\`
Aliases: \`\`\`on o off\`\`\`
Función: \`\`\`Elimina los links cuando un usuario mande uno, para los admins y owner no se lo va borrar el bot\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antilinks-{on}
$getGuildVar[prefix]antilinks-{off} (recuerde que los paréntesis no se colocan es solo un ejemplo)\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-antipalabrotas", 
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antipalabrotas\`\`\`
Permisos por el l usuario y bot: \`\`\`Administrador (para el usuario que lo pueda activar, para el Bot que elimine las palabras) \`\`\`
Aliases: \`\`\`on o off\`\`\`
Función: \`\`\`Elimina las malas palabras que diga el usuario (no se borrara las malas palabras de los admins y del owner) \`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antipalabrotas-{on}
$getSGuildVar[prefix]antipalabrotas-{off}
Los paréntesis no hay que ponerlo, es solo para indicar que es obligatorio como dice la primera linia de texto\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-antiping",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antiping\`\`\`
Permiso por el usuario y bot: \`\`\`Administrador (para el usuario es para activar este sistema y para el Bot que borre el ping)\`\`\`
Aliases: \`\`\`on o off\`\`\`
Función: \`\`\`Elimina el ping cuando un usuario hace ping, ignora a los admins y el owner\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antiping-{on}
$getGuildVar[prefix]antiping-{off}
Recuerda que no deves de poner las paréntesis
el ping que eliminará el bot sería el everyone y here, se acaba de poner que no haga ping a un usuario \`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-status", 
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`status\`\`\`
Permiso por el usuario y bot: \`\`\`ninguno\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Da la información de que está activo y configurado en el servidor\`\`\`]
$color[#ffffff] 
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-anti-raid", 
    code:`$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`anti-raid\`\`\`
Permiso por el usuario: \`\`\`OWNER\`\`\`
Aliases: \`\`\`antiraid\`\`\`
Función: \`\`\`Activa o Apaga todos los sistemas antiraid\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antiraid on o $getGuildVar[prefix]antiraid off\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-snipe", 
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`snipe\`\`\`
Permiso por el usuario y bot: \`\`\`Usuario: administrador
Bot: managemessages\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Mira los mensajes borrados del canal\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]snipe <#canal>\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.] `
},{
    name: "help-clear",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`clear\`\`\`
Permiso por el usuario y bot: \`\`\`managemessages\`\`\`
Aliases: \`\`\`purgue y borrar\`\`\`
Función: \`\`\`Elimina una cierta cantidad de mensajes (solo se puede 100 mensajes) \`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]clear {100}\`\`\`
]
$color[#ffffff] `
},{
    name: "help-warn", 
    code:`$title[HELP COMMANDS] 
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`warn\`\`\
Permiso por el usuario: \`\`\`ADMINISTRADOR\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Advierte al usuario mencionado\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]warn {@user#0000} <spam>\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.] `
},{
    name: "help-clear-warns",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`clear-warns\`\`\`
Permiso por el usuario: \`\`\`ADMINISTRADOR\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Elimina warns al usuario mencionado\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]clear-warns {@usuario#0000} {cantidad} \`\`\`]
$color[#ffffff] 
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-checkwarn", 
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`checkwarn\`\`\`
Permiso por el usuario: \`\`\`ADMINISTRADOR\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Ve cuantos warns tiene el usuario mencionado\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]checkwarns {@usuario#0000} \`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
},{
    name: "help-poll", 
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`poll\`\`\`
Permiso en el usuario: \`\`\`Administrador\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Crea una encuesta\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]poll {baneamos a pepito?} \`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-set-suggest", 
    code: `$title[HELP COMMANDS] 
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`set-suggest\`\`\`
Permiso en el usuario: \`\`\`managechannels\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Establece un canal de sugerencias\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]set-suggest {#canal}\`\`\`
Otros comandos: \`\`\`suggest, reset-suggest\`\`\`
Ejemplos por los otros comandos: \`\`\`suggest = crea una sugerencia
reset-suggest = elimina el canal de sugerencias\`\`\`
]
$color[#ffffff] 
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-setprefix", 
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`setprefix\`\`\`
Permiso en el usuario: \`\`\`ADMINISTRADOR\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Establece otro prefix para el bot\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]setprefix {!} \`\`\`]
$color[#ffffff] 
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-set-logs",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`set-logs\`\`\`
Permiso en el usuario: \`\`\`Ver registro de auditoria\`\`\`
Aliases: \`\`\`ninguno\`\`\`
Función: \`\`\`Establece los logs del servidor\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]set-logs {#canal}\`\`\`
Otros comandos: \`\`\`reset-logs\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-antispam",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antispam\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
Aliases: \`\`\`on, off\`\`\`
Función: \`\`\`Borra los mensajes repetidos (borra el de los admins y usuarios)\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antispam-{on}
$getGuildVar[prefix]antispam-{off}\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-antibots",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antibots\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
Aliases: \`\`\`on, off\`\`\`
Función: \`\`\`Banea a los bots que entren al servidor\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antibots-{on}
$getGuildVar[prefix]antibots-{off}\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-antispam",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antispam\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
Aliases: \`\`\`on, off\`\`\`
Función: \`\`\`Borra los mensajes repetidos (borra el de los admins y usuarios)\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antispam-{on}
$getGuildVar[prefix]antispam-{off}\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-antijoins",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antijoins\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
Aliases: \`\`\`on, off\`\`\`
Función: \`\`\`Banea a los nuevos usuarios que entren al servidor\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antijoins-{on}
$getGuildar[prefix]antijoins-{off}\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-anticanales",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`anticanales\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
Aliases: \`\`\`on, off\`\`\`
Función: \`\`\`Borra los canales que creen los usuaeios o bots y expulsara a los usuarios/bots que creen o borren\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]anticanales {on}
$getGuildVar[prefix]anticanales {off}\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-antiiploggers",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antiiploggers\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
Aliases: \`\`\`on, off\`\`\`
Función: \`\`\`Borra los links maliciosos\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antiiploggers {on}
$getGuildVar[prefix]antiiploggers {off}\`\`\`
Nota: Este sistema solo tiene los links más comunes. Si el bot no borra un link malicioso lo puedes reportar en el server de soporte.]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-antiroles",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antiroles\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
Aliases: \`\`\`on, off\`\`\`
Función: \`\`\`Borra los roles que creen los usuarios o bots y expulsara a los usuarios/bots que creen o borren\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antiroles {on}
$getGuildVar[prefix]antiroles {off}\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-antimalicius",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`antimalicius\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
Aliases: \`\`\`on, off\`\`\`
Función: \`\`\`Banea a los usarios que estan en la blacklist del bot\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]antimalicius {on}
$getGuildVar[prefix]antimalicius {off}\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-verify-panel",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`verify-panel\`\`\`
Permiso en el usuario: \`\`\`Admin\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`de la información del sistema de la verificación\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-verify-on",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`verify-on\`\`\`
Permiso en el usuario: \`\`\`Admin\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`enciende la verificación del servidor\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-verify-off",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`verify-off\`\`\`
Permiso en el usuario: \`\`\`Admin\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`apaga el sistema de verificación\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-verify-channel-set",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`verify-channel-set\`\`\`
Permiso en el usuario: \`\`\`Admin\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`establece el canal de verificación\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-verify-role-set",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`verify-role-set\`\`\`
Permiso en el usuario: \`\`\`Admin\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`establece el rol de la verificación\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-verify-alt-acc-setup",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`verify-alt-acc-setup\`\`\`
Permiso en el usuario: \`\`\`Admin\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`establece el sistema anti alts de la verificación\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-verify-method",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`verify-method\`\`\`
Permiso en el usuario: \`\`\`Admin\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`establece el metodo de verificación\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-verify-captcha",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`verify-captcha\`\`\`
Permiso en el usuario: \`\`\`Ninguno\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`te verifica con un code de captcha dado cuando entres al servidor\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-kick",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`kick\`\`\`
Permiso en el usuario y del bot: \`\`\`Kick\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Expulsa a un usuario mencionado\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]kick {User#0000} <Spam>\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-captcharole",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`captcharole\`\`\`
Permiso en el usuario: \`\`\`MANAGE SERVER\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Establece el rol de la verificación captcha\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-captchapanel",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`captchapanel\`\`\`
Permiso en el usuario: \`\`\`MANAGE SERVER\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Lanza el panel de verificación captcha donde se podran verificar los usuarios\`\`\`
]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`

},{
    name: "help-ticket",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`ticket\`\`\`
Permiso en el usuario: \`\`\`Ninguno\`\`\`
Aliases: \`\`\`open, newticket\`\`\`
Función: \`\`\`Abre un ticket\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-memes",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`memes\`\`\`
Permiso en el usuario: \`\`\`Ninguno\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Envia un meme random\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-check",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`check\`\`\`
Permiso en el usuario: \`\`\`Ninguno\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Revisa si estas dentro de la Blacklist del bot\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-memes",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`statsblack\`\`\`
Permiso en el usuario: \`\`\`Ninguno\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Te dara la iformación sobre los que estan dentro de la Blacklist\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-setTicketCategory",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`setTicketCategory\`\`\`
Permiso en el usuario: \`\`\`managechannels\`\`\`
Aliases: \`\`\`setTC, addCategoryTicket\`\`\`
Función: \`\`\`Configura la ID de la categoria del ticket donde seran creados\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]setTicketCategory {ID CATEGORY}\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-ticketPanel",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`ticketPanel\`\`\`
Permiso en el usuario: \`\`\`managechannels\`\`\`
Aliases: \`\`\`sendPanelTicket, newpanel\`\`\`
Función: \`\`\`Envia un panel de tickets\`\`\`
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-afk",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`afk\`\`\`
Permiso en el usuario: \`\`\`Ninguno\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Establece tu estado en afk\`\`\`
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-set-confe",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`setconfe\`\`\`
Permiso en el usuario: \`\`\`managechannels\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Establece el canal de confeción\`\`\`
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-confe",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`confe\`\`\`
Permiso en el usuario: \`\`\`Ninguno\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Manda una confeción anonima\`\`\`
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-configalt",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`configalt\`\`\`
Permiso en el usuario: \`\`\`Owner\`\`\`
¿Comando Premium?: \`\`\`Si\`\`\`
Aliases: \`\`\`configurar-antialts, config-alt\`\`\`
Función: \`\`\`Configura el sistema antialts\`\`\`
Ejemplo: \`\`\`$getGuildVar[prefix]configalt {10}\`\`\` ]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
    name: "help-checkpremium",
    code: `$title[HELP COMMANDS]
$description[
{} = Obligatorio
<>= Opcional
() =Función

Nombre del comando: \`\`\`checkpremium\`\`\`
Permiso en el usuario: \`\`\`Ninguno\`\`\`
¿Comando Premium?: \`\`\`Si\`\`\`
Aliases: \`\`\`No tiene\`\`\`
Función: \`\`\`Checa si eres premium\`\`\`]
$color[#ffffff]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
}] 