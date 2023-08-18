module.exports = ({
    name: "checkpremium",
    code: `$description[Usted tiene acceso a los comandos **Premium**]
    $color[#ffffff]
    $onlyIf[$getUserVar[premium;$authorID]==Si;{newEmbed:
        {description:Usted no tiene acceso a los comandos **Premium**}
        {color:#ffffff}}]
    $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
    $reply[$messageID;true]`
})