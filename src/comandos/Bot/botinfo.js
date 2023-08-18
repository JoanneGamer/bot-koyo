module.exports = [{
    name: "botinfo",
    aliases: ['about', 'bot-info'],
    code: `$title[Información de $username[$clientID];https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190]

$description[
> **Creadores:** \`Itsneuss#5101 y <!> Joann#7600\`

> **Prefix:** $getGuildVar[prefix]
> **Custom:** \`si.\`

> **ID:** \`$clientID\`
> **Fecha de creación:** <t:$truncate[$divide[$creationDate[$clientID;ms];1000]]>

**Técnico:**
> **Cpu:** \`$cpu\`
> **Ram Usada:** \`$round[$ram[heapTotal];0]MB\`
> **Database:** \`Mongodb\`
> **Librería:** \`Node.js\`
> **Lenguaje:** \`javascript\`
> **Paquete:** \`Aoi.js\`
> **Versión del paquete:** \`$packageVersion\`

**Estadísticas:**
> **Número total de miembros:** \`$allMembersCount\`
> **Número total de servidores:** \`$guildCount\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)]
$footer[@MobStudios]

$thumbnail[$userAvatar[$clientID]]
$reply[$messageID;true]
$color[#ffffff]

$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`

}]  
