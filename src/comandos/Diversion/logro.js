module.exports = ({
name: "logro",
aliases: ['trofeo'],
$if: "old",
code: `
$image[https://minecraftskinstealer.com/achievement/1/Achievement+Get%21/$replaceText[$message; ;+;-1]]
$addTimestamp
$title[🆙 ¡El Jugador $username consiguió un nuevo logro!]
$argsCheck[>0;:x: | Pon algo.]
$color[#ffffff]
$onlyif[$emojisFromMessage[$message]==;**No puedes poner emojis.**]

$onlyIf[$charCount[$message]<=18;**Caracteres no validos o máximo de caracteres alcanzado \`18\`.**]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
})