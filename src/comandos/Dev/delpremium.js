module.exports = ({
    name: "del-premium",
    aliases: "ddp",
    code: `$setUserVar[premium;No;$finduser[$message[1]]]
    $description[Retiraste el **Premium** a **$usertag[$finduser[$message[1]]]**]
    $color[#ffffff]
    $argsCheck[>0;pon el id, mencion o nombre#tag del usuario!]
    $onlyForIDs[834904556101828708;744035326049386518;]
    $reply[$messageID;true]`
    })