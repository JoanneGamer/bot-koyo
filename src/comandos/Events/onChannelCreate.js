module.exports = {
    channel: "$getGuildVar[logs;$guildID]",
    type: "channelCreate",
    code: `
$title[Mod logs]
$description[
**Se creo un canal:**
<#$channelID>
**ID del canal:**
\`$channelID\`
]
$footer[@MobStudios]
$addTimestamp 
$color[ffffff]

$onlyIF[$getGuildVar[logs]<undefined;]`
}