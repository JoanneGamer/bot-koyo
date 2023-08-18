module.exports = [{
    name: "afk",
    $if: "old",
    code: `$if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]]
    $if[$hasPerms[$guildID;$clientID;managenicknames]==true]
    $if[$authorID!=$ownerID]
    $if[$nickname!=]
    $changeNickname[$authorID;AFK | $nickname;Usuario en Afk]
    $else
    $changeNickname[$authorID;AFK | $username;User en afk]
    $endif
    $endif
    $endif
    $endif
    $author[AFK;$userAvatar]
    $description[<@$authorID> ahora está afk. \n Razon: $getUserVar[afkr]]
    $color[Random]
    $setUserVar[afk;true]
    $wait[1ms]
    $setUserVar[afkr;$message]
    $onlyif[$getUserVar[afk]!=true;]
$footer[$guildName[$guildID] $addTimestamp]
$reply[$messageID;true]
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
},{
    name: "$alwaysExecute",
    $if: "old",
    code: `$if[$getUserVar[afk]==true;]
    $if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]]
    $if[$hasPerms[$guildID;$clientID;managenicknames]==true]
    $if[$authorID!=$ownerID]
    $changeNickname[$authorID;$replaceText[$nickname;AFK | ;;1];Usuario en Afk ]
    $endif
    $endif
    $endif
    $setUserVar[afkr;]
    $setUserVar[afk;false]
    Bienvenido/a al chat de nuevo <@$authorID> 
    $elseif[$mentioned[1;yes]!=$authorID]
    $if[$getUserVar[afk;$mentioned[1]]==true]
    $username[$mentioned[1]] está afk, razón: $getUserVar[afkr;$mentioned[1]]
    $endif
    $endelseif
    $endif
    $wait[1ms]
    
    `
}]  
