module.exports = ({
name: "delete-black-list",
aliases: "dbl",
code: `$setvar[numblacklist;$sub[$getVar[numblacklist];1]]
$setvar[lastunblacklist;$finduser[$message[1]]]

$setGlobalUserVar[rblacklist;;$finduser[$message[1]]]

$setGlobalUserVar[blacklist;false;$finduser[$message[1]]]

$title[Usuario sacado de la blacklist]
$description[El usuario $usertag[$finduser[$message[1]]] fue removido de la blacklist]
$color[de173a]
$onlyif[$getglobaluservar[blacklist;$findUser[$message[1]]]==true;Este usuario no esta blacklisteado!]
$argsCheck[>0;pon el id, mencion o nombre#tag del usuario a desbanear del bot!]
$onlyForIDs[834904556101828708;744035326049386518;]`
})