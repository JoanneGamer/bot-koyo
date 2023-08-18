module.exports = [{
    name: "ticket",
    aliases: ["open", "newticket"],
    code: `  $deleteCommand
    $channelSendMessage[$channelID[ticket-$authorID];{newEmbed:
        {title: Ticket abierto}
        {description:¡Hola <@$authorID>! Un representante estará contigo en breve. ¿En qué podemos ayudarte hoy?}
      {color:#ffffff}
      {footer:Haz click en 🔒 para cerrar este ticket.}}
      {actionRow:{button:🔒 Cerrar:danger:close:true}};false]
      $createChannel[$guildID;ticket-$authorID;Text;false;$getGuildVar[tcategory]]
      $onlyIf[$channelExists[$channelID[ticket-$authorID]]==false;Ya tienes un ticket creado.]
      $onlyIf[$getGuildVar[tcategory]!=;:x: Por favor, configura una categoría de tickets usando el comando \`$getGuildVar[prefix]setTicketCategory <ID de categoría>\`.]
    $reply[$messageID;true]
    $suppressErrors[¡Error inesperado! Puedes probar esto para solucionar este error (Si no se solucione manda un reporte de esto)
      1. Dar todos los permisos (puedes darme unicamente ADMINISTRADOR)
      2. Poner mi rol arriba del todo.]
      $onlyIf[$getGuildVar[anticanales]==false;El sistema anticanales se encuentra activo. (El sistema es muy seguro que borra los canales que cree, suena muy absurdo esto pero intentamos arreglarlo.)]
      $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]

      `
},{
    name: "close",
    type: "interaction",
    prototype: "button",
    code: `
      $deleteChannels[$channelID]
    $wait[5s]
    $interactionReply[✅ | El ticket será cerrado en unos momentos.;;;;users;false]
    `
},{
    name: "setTicketCategory",
    aliases: ["setTC", "addCategoryTicket"],
    code: `
      $setGuildVar[tcategory;$message[1]]
      $description[Se ha establecido la categoría de tickets. (Si añadiste otro ID que no sea la ID de la categoria tirara un error definido!)]
      $color[#ffffff]
      $onlyPerms[managechannels;:x: ¡Necesitas permisos de **managechannel** para usar este comando!]
    `
},{
  name: "ticketPanel",
  aliases: ["sendPanelTicket", "newpanel"],
  code: ` $deleteCommand
  $title[Ticket System]
  $description[Si tienes dudas, o necesitas ayuda con algo, crea un ticket para que podamos ayudarte.

    :warning: No contacte con el Soporte de manera privada, solo ofrecemos Soporte por este canal. :warning:]
  $color[#ffffff]

  $addButton[1;Ticket;primary;support;false;🎫]

  $onlyIf[$getGuildVar[tcategory]!=;:x: Por favor, configura una categoría de tickets usando el comando \`$getGuildVar[prefix]setTicketCategory <ID de categoría>\`.]

  $suppressErrors[¡Error inesperado! Puedes probar esto para solucionar este error (Si no se solucione manda un reporte de esto)
    1. Dar todos los permisos (puedes darme unicamente ADMINISTRADOR)
    2. Poner mi rol arriba del todo.] 
    $onlyIf[$getGuildVar[anticanales]==false;El sistema anticanales se encuentra activo. (El sistema es muy seguro que borra los canales que cree, suena muy absurdo esto pero intentamos arreglarlo.)]
    $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]`
},{
  name: "support",
  type: "interaction",
  prototype: "button",
  code: `   
  $channelSendMessage[$channelID[ticket-$authorID];{newEmbed:
    {title: Ticket abierto}
    {description:¡Hola <@$authorID>! Un representante estará contigo en breve. ¿En qué podemos ayudarte hoy?}
  {color:#ffffff}
  {footer:Haz click en 🔒 para cerrar este ticket.}}
  {actionRow:{button:🔒 Cerrar:danger:close:true}};false]
  
  $createChannel[$guildID;ticket-$authorID;Text;false;$getGuildVar[tcategory]]
  $interactionReply[✅ | Ticket abierto con éxito, <@$authorID>!;;;;users;true]
  
  $onlyIf[$channelExists[$channelID[ticket-$authorID]]==false;❌ | Ya tienes un ticket abierto!.
  {options:{ephemeral}}
  {extraOptions:{interaction}}
  ]
  `
}]