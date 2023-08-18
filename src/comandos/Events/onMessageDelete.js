module.exports = {
    channel: "$getGuildVar[logs;$guildID]",
    type: "messageDelete",
    code: `
$title[Mod logs]
$description[
**Mensaje eliminado:**
\`$message\`
**ID del mensaje eliminado:**
\`$messageID\`
**En el canal:**
<#$channelID>
]
$footer[@MobStudios]
$addTimestamp
$color[FFFFFF]

$onlyIF[$getGuildVar[logs]<undefined;]`
}