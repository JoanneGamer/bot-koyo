module.exports = ({
    name: "warn", 
    code: `

$title[Warn system]

$color[#ffffff]

$thumbnail[$userAvatar[$mentioned[1]]]

$description[
**$username** ha advertido  **$username[$mentioned[1]]**!
Razón:- $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;No hay razón;1];false;$noMentionMessage;1]]

$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]


$onlyIf[$mentioned[1]!=$ownerID;**¡No puede advertir al owner del servidor!**]

$onlyIf[$userHighestRole[$mentioned[1]]!=$userHighestRole[$authorID];No puedes advertir a alguien con el mismo rol más alto.]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$mentioned[1]]];No puedo advertir a alguien con un rol más alto que el mío.]

$onlyIf[$userHighestRole[$mentioned[1]]!=$userHighestRole[$clientID];No puedo advertir a alguien con el mismo rol más alto que el mío.]

$onlyIf[$isBot[$findMember[$message]]==false;No puedes hacer eso]
 $onlyIf[$mentioned[1]!=$authorID;Estoy seguro de que no quieres hacer eso.]
 $onlyIf[$mentioned[1]!=$clientID;No puedo advertirme.]
 $onlyIf[$isMentioned[$mentioned[1]]==true;Necesitas mencionar a alguien a quien quieres que advierta]

$onlyIf[$mentioned[1]!=;**¡Necesitas mencionar a alguien para advertir!**]
$onlyPerms[kickmembers;**No tienes el permiso kick!**]
$suppressErrors[]

 `

})  