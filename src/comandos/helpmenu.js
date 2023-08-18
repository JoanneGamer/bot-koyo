module.exports = [{
    name: "help",
    aliases: ["cmds", "cmd", "comandos"],
    code: `
$thumbnail[$userAvatar[$clientID]]
$title[Información Sobre $username[$clientID];https://discord.com/api/oauth2/authorize?client_id=1075554962060349490&permissions=8&scope=bot%20applications.commands]
$image[https://media.discordapp.net/attachments/1074893592201543681/1124073165304377384/png_20230629_162445_0000.png]
$description[
**Holi, soy una bot con multiples funciones para tus servidores.** ♥

> **Características:**
> ▸ **Cantidad de comandos:** \`$commandsCount.\`
> ▸ **Prepara tu Servidor con los Sistemas Automatizados.**
> ▸ **Evita Ataques gracias a los Sistemas de Protección.**
    
> **Como funciono?**
> ▸ **Mi prefix es:** \`$getGuildVar[prefix]\` 

> **ESTADÍSTICAS:**
> ▸ **Cantidad de servidores:** \`$guildCount\` 
>  **Tiempo en línea:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;week;semana];second;segundo];minute;minuto];hour;hora];day;día]\` Tiempo activo
> ▸ **Ping:** \`$pingms.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)]
$footer[@MobStudios]
$color[FFFFFF]

$addSelectMenu[1;menu;Selecciona algo 📓;1;1;no;Moderación 🔨:Muestra los comandos de moderación 🔨:men2;Verificación ✅:Muestra los comandos de Verificación ✅:men3;Configuracion ⚙️:Muestra los comandos de configuracion ⚙️:men4;Ticket 🎫:Muestra los comandos de tickets 🎫:men5;Utilidad ✨:muestra los comandos de utilidad ✨:men6;Bot 🤖:Muestra los comandos del bot:men7;Diversión 😂:Muestra los comandos de diversión 😂:men8;Economia 💵:Muestra los comandos de economia 💵:men9;BlackList 📓:Muestra los comandos de BlackList 📓:men10;Devs 👑:Muestra los comandos de los Devs:men11;Inicio 🏡:INICIO 🏡:men12]
`

},{

  type: "interaction", 

  name: "menu",

  prototype: "selectMenu", 

  code: `$interactionUpdate[;{newEmbed:{thumbnail:$userAvatar[$clientID]}{title:🔨 **Moderación.**}{description: 
> **Unban** ▸ \`Desbanea a un usuario con su ID.\` 
> **Warn** ▸ \`Te da una advertencia.\` 
> **Check-warns** ▸ \`Ve cuantas advertencia tiene el usuario mencionado.\` 
> **Clear-warns** ▸ \`Borra las advertencias del usuario mencionado.\` 
> **Clear** ▸ \`Borra una cantidad de mensajes.\`  
> **Lock** ▸ \`Bloquea un canal.\` 
> **Unlock** ▸ \`Desbloque un canal.\` 
> **Nuke** ▸ \`Borra todos los mensajes de un canal.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083071533207672/png_20230629_165340_0000.png}
{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:FFFFFF}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]$onlyIf[$interactionData[values[0]]==men2;] 

`

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{thumbnail;$userAvatar[$clientID]}{title:✅ **Verificación.**} {description:> **Captcharole** ▸ \`Configura el rol de verificación.\`
> **Captchapanel** ▸ \`Panel de verificación.\` 

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083080320262214/png_20230629_165442_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:FFFFFF}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men3;]

  `

},{
  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{thumbnail:$userAvatar[$clientID]}{title: ⚙️**Configuración.**}{description:
> **Setprefix:** ▸ \`Establece el prefix del bot.\`
> **Set-logs:** ▸ \`Establece el canal de logs.\`
> **set-confe:** ▸ \`Establece el canal de confeciones.\`
> **Set-suggest:** ▸ \`Establece el canal de sugerencias.\`
> **Reset-logs:** ▸ \`Resetea el canal de logs.\`
> **Reset-suggest:** ▸ \`Resetea el canal de sugerencias.\`
> **Reset-confe:** ▸ \`Resetea el canal de confeciones.\`
> **Reset-prefix:** ▸ \`Resetea el prefix.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083095998574662/png_20230629_165601_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:FFFFFF}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men4;]

  `

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{title:🎫 **Tickets.**}{description:
  \`MANTENIMIENTO\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083107470004286/png_20230629_165753_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:ffffff}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men5;]

  `

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{title:✨️ **Utilidad.**}{description:
> **Poll** ▸ \`Crea una encuesta.\` 
> **Serverinfo** ▸ \`Muestra ka información del servidor.\`
> **Suggest** ▸ \`Envía una sugerencia.\`
> **Userinfo** ▸ \`Muestra la información del usuario.\`
> **Afk** ▸ \`Activa el sistema de Afk.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083119717359626/png_20230629_165849_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:Random}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men6;]

  `

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{title:🤖 **Bot.**}{description:
> **Botinfo** ▸ \`Te muestra información del bot.\`
> **Invite** ▸ \`Te envía la invitación del bot.\`
> **Report** ▸ \`Reportas un bug.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083132518387783/png_20230629_165924_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:ffffff}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men7;]

  `

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{title:🤣 **Diversión.**}{description:
> **8ball** ▸ \`Pregúntale algo al bot.\`
> **Avatar** ▸ \`Te enseña el avatar de los demas.\` 
> **Logro** ▸ \`Desbloqueas un logro.\` 
> **Memes** ▸ \`Te muestra memes.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083142853148702/png_20230629_165952_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:ffffff}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men8;]

  `

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{title:💵 **Economia.**}{description: 
\`\`\`MANTENIMIENTO.\`\`\`
**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083151963168900/png_20230629_170059_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:ffffff}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men9;]

  `

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{title:📓 **BlackList.**}{description:
> **Statsblack** ▸ \`Registro de la blacklist.\` 
> **Check** ▸ \`Te dice si estás en la blacklist y la razón.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083172271996978/png_20230629_170211_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:ffffff}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men10;]

  `

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{title:👑 **Devs.**}{description:
> **Addblacklist** ▸ \`Te agrega a la blacklist.\`
> **Delblacklist** ▸ \`Te quita de la blacklist.\` 
> **Eval** ▸ \`Ejecuta codigos.\`
> **Reload** ▸ \`Reinicia el bot.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}
{image:https://media.discordapp.net/attachments/1074893592201543681/1124083183181369424/png_20230629_170312_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:ffffff}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men11;]

  `

},{

  type: "interaction",

  name: "menu",

  prototype: "selectMenu",

  code: `

$interactionUpdate[;{newEmbed:{thumbnail:$userAvatar[$clientID]}{description:    **Holi, soy una bot con multiples funciones para tus servidores.** ♥

> **Características:**
> ▸ **Cantidad de comandos:** \`$commandsCount.\`
> ▸ **Prepara tu Servidor con los Sistemas Automatizados.**
> ▸ **Evita Ataques gracias a los Sistemas de Protección.**
    
> **Como funciono?**
> ▸ **Use** \`$getGuildVar[prefix]cmd\` **para ver mis comandos y empezar a configurar!**
    
> **ESTADÍSTICAS:**
> ▸ **Cantidad de servidores:** \`$guildCount\` 
>  **Tiempo en línea:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;week;semana];second;segundo];minute;minuto];hour;hora];day;día]\` Tiempo activo
> ▸ **Ping:** \`$pingms.\`

**Otras cosas:**
[Invitame](https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190) • [Soporte](https://discord.gg/DSDjCfgkus) • [Host](https://dash.huguitisnodes.host/) • [Web](https://koyo-web.vercel.app/) • [Privacidad](https://github.com/Neuss2/Pol-tica-de-privacidad-de-Koyo)}{image:https://media.discordapp.net/attachments/1074893592201543681/1124083211299987507/png_20230629_170402_0000.png}{footer:@MobStudios}{thumbnail:https://cdn.discordapp.com/avatars/1075554962060349490/0e609ec44704909ecfc4e7b9446033a2.png?size=4096}{color:ffffff}};{actionRow:{selectMenu:menu:Selecciona algo 📓:1:1:no:📓}{selectMenuOptions:Moderación:men2:Muestra los comandos de moderación:no:🔨}{selectMenuOptions:Verificación:men3:Muestra los comandos de Verificación:no:✅}{selectMenuOptions:Configuracion:men4:Muestra los comandos de configuracion:no:⚙️}{selectMenuOptions:Ticket:men5:Muestra los comandos de tickets:no:🎫}{selectMenuOptions:Utilidad:men6:muestra los comandos de utilidad:no:✨}{selectMenuOptions:Bot:men7:Muestra los comandos del bot:no:🤖}{selectMenuOptions:Diversión:men8:Muestra los comandos de diversión:no:😂}{selectMenuOptions:Economia:men9:Muestra los comandos de economia:no:💵}{selectMenuOptions:BlackList:men10:Muestra los comandos de BlackList:no:📓}{selectMenuOptions:Devs: men11:Muestra los comandos de los Devs:no:👑}{selectMenuOptions:Inicio:men12:INICIO:no:🏡}}}]

  $onlyIf[$interactionData[values[0]]==men12;]

  `

}]
