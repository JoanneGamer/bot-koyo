module.exports = {
    channel: "$getGuildVar[logs;$guildID]",
    type: "channelDelete",
    code: `
$title[Mod logs]
$description[
**Se elimino un canal:**
$channelName[$channelID]
**ID del canal:**
\`$channelID\`
]
$footer[@MobStudios]
$addTimestamp 
$color[ffffff]

$onlyIF[$getGuildVar[logs]<undefined;]`

}