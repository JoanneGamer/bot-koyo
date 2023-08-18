module.exports = {
    channel: "$getGuildVar[logs;$guildID]",
    type: "messageDeleteBulk",
    code: `
$title[Mod logs]
$description[
**Eliminación masiva de mensajes en el canal:** <#$channelID>
]
$footer[@MobStudios]
$addTimestamp 
$color[ffffff]

$onlyIF[$getGuildVar[logs]<undefined;]`
}