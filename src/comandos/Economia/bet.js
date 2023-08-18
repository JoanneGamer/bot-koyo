module.exports = [{
    name: "bet",
    $if: "old",
    code: `$if[$randomText[éxito;fallo;empate]==éxito]
    $title[$username GANO LA APUESTAS]
    $description[Has ganado **⏣ $numberSeparator[$message[1]]**
    $random[0;100]% **Porcentaje de probabilidad de ganar**
    
    $username Rolled \`$random[6;36]\` 
    Distribuidor/a Rolled \`$random[1;5]\`
    ]
    $thumbnail[$userAvatar]
    $color[#ffffff]]
   $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$message[1]]]
   $else
   $if[$randomText[éxito;fallo;empate]==fallo]
    $title[$username APUESTA FALLADA]
    $description[Has Ganado **NADA** 🤣
        __**No pierdes nada**__
    
        $username Rolled \`$random[6;36]\` 
        Distribuidor/a Rolled \`$random[1;5]\` 
    ]
    $color[#FFA500]
    $thumbnail[$userAvatar]
   $else
   $if[$randomText[éxito;fallo;empate]==empate]
    $title[$username PERDISTE EL JUEGO]
    $description[Has perdido **⏣$numberSeparator[$message[1]]**
    
    $username Rolled \`$random[6;36]\` 
    Distribuidor/a Rolled \`$random[1;5]\`
    ]
   $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$message[1]]]
    $thumbnail[$userAvatar] $color[#ffffff]
    $footer[Qué triste.]
   
   
   $endif
   $endif
   $endif

   $onlyIf[$getGlobalUserVar[coin]>=$noMentionMessage;Lo siento, no tienes suficiente dinero]
   $onlyIf[$noMentionMessage>499;{newEmbed:{description:**Hola compañer@, necesitas al menos 💵 500! para una apuesta**}{color:Red}}] 
   $argsCheck[>0;{newEmbed:{description:¡Por favor ingrese la cantidad que desea apostar!}{color:Red}}]
   $globalCooldown[30m;No puedes apostar seguidamente. Espera %time%]
   $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
   razon: **$getglobaluservar[rblacklist]**
   Si crees que fue un error comunicate con un **administrador**.]
   `
   }]