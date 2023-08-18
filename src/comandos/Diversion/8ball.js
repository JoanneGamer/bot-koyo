module.exports = ({
name: "8ball",
code: `
$title[**🎱ball**]
$description[
**Pregunta:** \`$message\`
**Respuesta:** \`$randomText[Si;No;Claro;Imposible;Puedes repetir tengo lag;Claro que si;Claro que no;]\`]
$color[#ffffff]
$argsCheck[>0;{newEmbed:{description:❌️ **Por favor coloque algo para que la bola decida!.**}{color:FFFFFF}}]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
})