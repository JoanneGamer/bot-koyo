module.exports = {
    channel: "$getGuildVar[logs;$guildID]",
    type: "banAdd",
    code: `
$title[Mod logs]
$thumbnail[$userAvatar[$authorID]]
$description[
**Usuario baneado:** <@$authorID>
**ID:** $authorID]
$addTimestamp 
$footer[@MobStudios]
$color[FFFFFF]

$onlyIF[$getGuildVar[logs]<undefined;]`
    
}