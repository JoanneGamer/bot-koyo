module.exports = ({
name:"work",
code:`
$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp];$random[3;17]]]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$random[30;300]]]
$title[¡trabajo completado!]
$description[
<@$authorID> Has ayudado $randomText[a una chica a recolectar ovejas <:oveja:1086332980512952320>;un chico a construir una casa <:casa:1086334627343519874>;un chico a obtener un perro <:perro:1086334657014009947>;unos chicos a derrotar al dragón del en <:draagon:1086334354806014072>:;unos jugadores a derrotar zombies <:zombiie:1086334023300829235>;unos novatos a buscar materiales <:material:1086333789468377159>] y te han $randomText[obsequiado;regalado;pagado;dado] $random[30;300] coins <:Minecoin:1086305147178729653>.]
$addTimeStamp
$globalCooldown[15m;<:reloj:1086381550662332619> <@$authorID> Estas cansado espera %time% para volver a trabajar.]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
})