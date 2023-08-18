module.exports = ({
    name: "invite",
    code: `
$thumbnail[$userAvatar[$clientID]]
$description[
**Recuerda darme todos los permisos para que funcione bien!.**]
$footer[@MobStudios]
$color[#ffffff]
$addButton[1;INVITE;5;https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190no]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
    
})