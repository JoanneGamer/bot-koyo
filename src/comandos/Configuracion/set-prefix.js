module.exports = ({
    name: "setprefix",
    aliases: ['establecer-prefix','set-prefix'],
    code: `$setGuildVar[prefix;$message;$guildID;main]

$description[<a:check_koyo:1095550375781748876> **Mi nuevo prefix es: $message.**]
$color[FFFFFF]

$onlyif[$emojisFromMessage[$message]==;{newEmbed:{description:<a:x_koyo:1129625215807262780> **Esto es un emoji.**}{color:#ffffff}}]

$onlyIf[$charCount[$message]<=2;{newEmbed:{description:<a:x_koyo:1129625215807262780> **Caracteres no validos o máximo de caracteres alcanzado \`2\`.**}{color: ffffff}}]

$argsCheck[1;{newEmbed:{description:<a:x_koyo:1129625215807262780> **Por favor indique un prefix nuevo.**}{color: ffffff}}]

$onlyPerms[administrator;{newEmbed:{description:<a:x_koyo:1129625215807262780> **Necesitas ser \`\`\`ADMIN\`\`\` para esto!.**}{color: ffffff}}]

$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`

})  