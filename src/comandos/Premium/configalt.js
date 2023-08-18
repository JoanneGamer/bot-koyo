module.exports = [{
    name: "configalt", 
    aliases: ["configurar-antialts", "config-alt"],
    madeby: "Joann <!>#7600",
    code: ` 
    $setGuildVar[altconfig;$message[1]]
    $description[Configuración concluida. Ahora expulsare a las multicuentas que tengan menos de $message[1] día/s.]
    $color[#ffffff]
    

    $onlyIf[$message[1]>1;⚠️ Puedo solo poner un minimo de 2 días.]
    $onlyIf[$message[1]<=95;⚠️ Sólo puedo poner un máximo de 95 días!]
    $onlyIf[$isNumber[$message[1]]==true;:x: Eso no es un número.]

    $argsCheck[>0;Escribe un numero de días para configurar esta opción.
    Ejemplo: $getGuildVar[prefix]configalt 20 ]
    
    $onlyIf[$getUserVar[premium;$authorID]==Si;{newEmbed:
        {description:Usted no tiene acceso a los comandos **Premium**}
        {color:#ffffff}}]
        $onlyif[$authorID==$ownerID;sólo el owner de este servidor puede usar este comando!]
    $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]

$reply[$messageID;true]
    `
}]