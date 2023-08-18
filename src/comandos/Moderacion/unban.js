module.exports = ({
 name: "unban",
 code: `$unban[$guildID;$finduser[$message[1]]]
 $title[¡Miembro desbaneado!]
 $description[El moderador <@$authorID> desbaneo a <@$message[1]>]
 $color[#ffffff]
$onlyif[$isbanned[$guildID;$finduser[$message]]==true;{newEmbed:{description:Este usuario no esta baneado del servidor!}{color:#ffffff}}]
 
$argsCheck[>0;Proporcione el ID del usuario que desea desbanear]
 $onlyIf[$hasPerms[$guildID;$authorID;banmembers]==true;No tienes permisos \`BAN\`]
 $onlyClientPerms[banmembers;No tengo permisos \`BAN\`]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
$suppressErrors `
})