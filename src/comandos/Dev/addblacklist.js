module.exports = ({
name: "add-black-list",
aliases: "abl",
code: `$setvar[numblacklist;$sum[$getVar[numblacklist];1]]

$setvar[lastblacklist;$finduser[$message[1]]]

$setGlobalUserVar[rblacklist;$replacetext[$replacetext[$checkcondition[$messageSlice[1]==];true;Sin razon especificada];false;$messageSlice[1]];$finduser[$message[1]]]

$setGlobalUserVar[blacklist;true;$finduser[$message[1]]]

$title[Usuario metido a la blacklist]
$description[El usuario $usertag[$finduser[$message[1]]] fue añadido a la blacklist por la siguiente razon: $replacetext[$replacetext[$checkcondition[$messageSlice[1]==];true;Sin razon especificada];false;$messageSlice[1]]]
$color[de173a]
$onlyif[$getuservar[blacklist;$findUser[$message[1]]]==false;Este usuario ya estan blacklisteado!]
$argsCheck[>0;pon el id, mencion o nombre#tag del usuario a banear del bot!]
$onlyForIDs[834904556101828708;744035326049386518;]`
})