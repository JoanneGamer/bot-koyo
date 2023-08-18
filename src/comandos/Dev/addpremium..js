module.exports = ({
    name: "add-premium",
    aliases: "adp",
    code: `$setUserVar[premium;Si;$finduser[$message[1]]]
    $description[Diste acceso a los comandos premium a **$usertag[$finduser[$message[1]]]**]
    $color[#ffffff]
    $argsCheck[>0;pon el id, mencion o nombre#tag del usuario!]
    $onlyForIDs[834904556101828708;744035326049386518;]
    $reply[$messageID;true]`
    })