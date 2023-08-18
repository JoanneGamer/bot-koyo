module.exports = [{
    name: "captcharole",
    code: `
    ✅ | Configuracion exitosa.
    $setGuildVar[captcharole;$mentionedRoles[1]]
    $onlyIf[$rolePosition[$userHighestRole[$clientID]]<=$rolePosition[$get[role]];❌ | Ese rol es superior al mio]
    $let[role;$mentionedRoles[1]]
    $onlyIf[$isMentioned[string]!=;Menciona un rol valido]
    $argsCheck[>0;Menciona un rol!] 
    $onlyPerms[managechannels;❌ No tienes el permiso de \`MANAGE SERVER\`]
    $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
    `
  },{
    name: "captchapanel",
    code: `🔒 | Captcha System
    Compruébelo usted mismo haciendo clic en el botón de abajo, para permitir el acceso completo al servidor.
  $addButton[1; | Verify;success;c1;no;👾]
  $onlyIF[$getGuildVar[captcharole]<undefined;❌ | El rol de verificación no está definido.]
  $onlyPerms[managechannels;❌ No tienes el permiso de \`MANAGE SERVER\`]
  $onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
  `
  },{
    name: "c1",
    type: "interaction",
    prototype: "button",
    code:`
    $interactionModal[Eres un robot?;c2;
     {actionRow:
       {textInput:Type the number#COLON# $getUserVar[captchacode]:2:captchacode:true:Verification System::3:30}
     }
     ]
     $wait[1s]
     $setUserVar[captchacode;$random[1;99999]]
     $onlyIf[$getUserVar[captchastatus]==false;Ya estas verificado.
        {options:{ephemeral}}
        {extraOptions:{interaction}}
        ]
     `
  },{
   name: "c2",
   type: "interaction",
   prototype: 'modal',
   $if: "old",
   code: `$if[$checkContains[$textInputValue[captchacode];$getUserVar[captchacode;$interactionData[user.id]]]==true]
   $setUserVar[captchastatus;true]
   $giveRoles[$guildID;$authorID;$getGuildVar[captcharole]]
   $interactionReply[✅ | La verificación fue exitosa.;;;;users;true]
  $else
   $interactionReply[❌ | La verificación fallida.;;;;users;true]
  $endif
  $log[$textInputValue[captchacode] $getUserVar[captchacode;$interactionData[user.id]] $checkContains[$textInputValue[captchacode];$getUserVar[captchacode;$interactionData[user.id]]]]
   `
  }]