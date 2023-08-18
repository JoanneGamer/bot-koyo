module.exports = ({
    name: "userinfo",
    aliases: ["user-info"],
    code: `$reply[$messageID;no]
$description[
> **Información del usuario.**

> **Nombre:**
\`\`\`$username[$mentioned[1;true]]\`\`\`
> **ID:**
\`\`\`$mentioned[1;true]\`\`\`
> **¿Es un bot?**
\`\`\`$replaceText[$replaceText[$isBot[$mentioned[1;true]];false;No;1];true;Si;1]\`\`\`
> **Plataforma** \`\`\`$userPlatform[$authorID;$guildID;$mentioned[1;true]]\`\`\`
> **¿Estado de DM?**
\`\`\`$replaceText[$replaceText[$isUserDMEnabled[$mentioned[1;true]];false;Cerrado;1];true;Abierto;1]\`\`\`
> **Creación de la cuenta:** <t:$truncate[$divide[$creationDate[$mentioned[1;true];ms];1000]]:F>

> **Información dentro del servidor:**

> **Entro a:** \`\`\`$guildName[$guildID]\`\`\`
> **Fecha de entrada:** <t:$truncate[$divide[$memberJoinDate[$mentioned[1;true];$guildID;ms];1000]]:F>
> **Roles:** \`\`\`$userRoles[$mentioned[1;true]]\`\`\`
]
$color[#ffffff]
$addTimestamp
$footer[$username[$mentioned[1;true]]]
$thumbnail[$userAvatar[$mentioned[1;true]]]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
})