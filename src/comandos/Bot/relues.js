module.exports = ({
    name: "rules", 
    code: `$title[<:rules:1097247866227015751> Reglas del servidor] 
$description[
    1°NSFW/GORE


    Solo si exista un canal para violencia o violación se le permite mandar imágenes o ejecutar cierto comandos underage o con mucha sangre,
    
    
    
    se le advertirá o silenciara si usted lo sube en un canal global o donde hable mucha gente
    
    
    
    2°CANALES
    
    
    
    Usted debe respetar cada canal como en un canal de imágenes solo mandaras, imágenes, si no se respeta eso se le advertirá nada más, pero si se le ha advertido muchas veces se le silenciara
    
    
    
    3°ROLES
    
    
    
    Si usted pide un rango superior, pero no cumple con los requisitos se le dirá que falta, si prosigue varias veces se le silenciara.
    
    
    
    4°ANUNCIOS
    
    
    
    Las invitaciones de servidores están prohibidas, solo el administrador podrá mandarlo en dicho canal
    
    
    
    5°POLÍTICA/RELIGIÓN
    
    
    
    No hables de política o tu religión ya seas ateo o cristiano lo que sea, eso causan peleas y odio y queremos un servidor donde todos tengan amigos y sean buena gente, solo se te advertirá.
    
    
    
    6°INFORMACIÓN PERSONAL
    
    
    
    No le des a alguien tu nombre y/o apellidos menos tu dirección, queremos lo mejor para ti, no un secuestro por culpa nuestra.
    
    
    
    7°RESPETÓ
    
    
    
    Sé respetuoso con todos los que tienen permisos de moderación, y administradores si no te importa se te silenciara un día completo.]
$footer[¡Al incumplir alguna de estas reglas se te sancionara!] 
$addClientReactions[<:rules:1097247866227015751>] 
$color[FF0000] 
$cooldown[20s;No puedes poner esa misma regla aquí] 
$onlyPerms[administrator;sólo un administrador puede usar esto!]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
    })