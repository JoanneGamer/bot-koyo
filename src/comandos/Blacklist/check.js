module.exports = ({
name: "check",
code: `$author[Check;$useravatar[$finduser[$message]]]
$addField[> Razon:;$replacetext[$replacetext[$checkcondition[$getglobaluservar[rblacklist;$finduser[$message]]==];true;ㅤ];false;$getglobaluservar[rblacklist;$finduser[$message]]]]
$addField[> Esta(s) en la blacklist?;$replacetext[$replacetext[$checkcondition[$getglobaluservar[blacklist;$finduser[$message]]==false];true;No];false;Si]]`
})