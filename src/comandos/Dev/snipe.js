module.exports = [({

channel: "$channelID",

type: "messageDelete",

code: `$setChannelVar[snipemsg;$message;$channelID]

$setChannelVar[snipeid;$authorID;$channelID]

$setChannelVar[snipehora;$dateStamp;$channelID]`

}),({

name: "snipe",

code: `

$author[$userTag[$getChannelVar[snipeid;$mentionedChannels[1;true]]];$userAvatar[$getChannelVar[snipeid;$mentionedChannels[1;true]]]]

$description[

:scroll: **Mensaje:** $getChannelVar[snipemsg;$mentionedChannels[1;true]]

]

$footer[Eliminado hace $parseDate[$sub[$datestamp;$getChannelVar[snipehora;$mentionedChannels[1;true]]];time].]

$color[c4d2ce]

$onlyif[$getChannelVar[snipemsg;$mentionedChannels[1;true]]!=;:x: ***Error, no hay ningun mensaje eliminado en*** <#$mentionedChannels[1;yes]>{delete:15s}]
$onlyForIDs[834904556101828708;744035326049386518;¡Solo mis developers pueden usar este comando!]
`

})] 