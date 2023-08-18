module.exports = ({
    name: "clear", 
    aliases: [`borrar`, `purgue`], 
    code: `
$deletecommand

$clear[$message[1]]

$title[✅ Mensajes eliminados.]

$description[Se purgó el chat, y se eliminaron $message[1] mensajes.]

$color[#ffffff] 

$deleteIn[5s]

$onlyIf[$isNumber[$message[1]]==true;:x: Eso no es un número.]

$onlyIf[$message[1]>1;⚠️ Puedo eliminar un mínimo de 2 mensajes.]

$onlyIf[$message[1]<=100;⚠️ Sólo puedo eliminar un máximo de 100 mensajes.]

$argsCheck[1;:x: No pusiste cuántos mensajes quieres eliminar.]
$onlyClientPerms[managemessages;⚠️ necesito el permiso de Gestionar mensajes para eliminar mensajes.]
$onlyPerms[managemessages; Sólo las personas con el permiso Gestionar mensajes están facultadas para usar este comando.]
$suppressErrors[¡Error inesperado! Puedes probar esto para solucionar este error (Si no se solucione manda un reporte de esto)
    1. Dar todos los permisos (puedes darme unicamente ADMINISTRADOR)
    2. Poner mi rol arriba del todo.]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
}) 