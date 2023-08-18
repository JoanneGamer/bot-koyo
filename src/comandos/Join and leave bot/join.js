module.exports = [{
    type: "guildJoin",
    channel:"$systemChannelID[$guildID]", // or you can use $systemChannelID, it won't work if the server does not have set an channel for it
    code: `$title[Información Sobre $username[$clientID];https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190]
    $description[
        __🔥 Mis Características__  
        > 🤯 Tengo $commandsCount comandos!
        > 👑 Administración, Moderación, Diversión, Verificación...!
        > 💪 Prepara tu Servidor con los Sistemas Automatizados.
        > 🛡 Evita Ataques gracias a los Sistemas de Protección.
        
        __:question: Como funciono?__
        > Use \`$getGuildVar[prefix]cmd\` para ver mis comandos y empezar a configurar!
        
        __:chart_with_upwards_trend: ESTADÍSTICAS:__
        > :file_folder: en \`$guildCount\` servidores!
        > ⌚️ \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;week;semana];second;segundo];minute;minuto];hour;hora];day;día]\` Tiempo activo
        > 📶 \`$messagePing\` Ping ]
        $color[#ffffff]
        $addButton[1;INVITE;5;https://discord.com/oauth2/authorize?client_id=$clientID&scope=applications.commands%20bot&permissions=1476783190;no]
        $addButton[2;SUPPORT;5;https://discord.gg/Q8gs8geWK9;no]`
    },{
        type: "guildJoin",
        channel: "1097605699917328455",
        code: `$description[Me añadieron a este servidor: \`$guildName[$guildID]\`
    Invite del servidor: $getGuildInvite[$guildID]
    Usuarios en el servidor: \`$membersCount[$guildID]\`
    ID del servidor: \`$guildID\`
    Owner: \`$username[$ownerID]\`
    ]
    $suppressErrors[{newEmbed:
    {description:Me añadieron a este servidor: \`$guildName[$guildID]\`
    Usuarios en el servidor: \`$membersCount[$guildID]\`
    ID del servidor: \`$guildID\`
    Owner: \`$username[$ownerID]\`} 
    {color:#ffffff}}]
    $color[#ffffff]`
    }]