module.exports = {
    channel: "$getGuildVar[logs;$guildID]",
    type: "banRemove",
    code: `
$title[Mod logs]
$thumbnail[$userAvatar[$authorID]]
$description[
**Ban removido:** <@$authorID>
**ID:** $authorID]
$addTimestamp 
$footer[@MobStudios]
$color[FFFFFF]

$onlyIF[$getGuildVar[logs]<undefined;]`
    
}