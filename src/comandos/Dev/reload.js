module.exports = [{

name: "reload",

aliases: "r",

code: `

Listo, todos los comandos actualizados.
$addButton[1;Total: $commandsCount;2;uselesscustomid;true]
$updateCommands

$onlyForIDs[834904556101828708;744035326049386518;¡Solo mis developers pueden usar este comando!]


`

},{
      name: "c-update", 
      code: `$reply[$messageID;true]
  
  Se ha creado el slash
  
  $createApplicationCommand[$guildID;update;La forma más rápida de actualizar sus códigos sin reiniciar.;true;slash]
  
  $onlyForIDs[834904556101828708;744035326049386518;{newEmbed:{description:<a:x_koyo:1129625215807262780> **Este comando no es para ti, es para mis dueños.**}{color: ffffff}}]`
    }, 
    {
      name: "update", 
      prototype: 'slash',
      type: 'interaction', 
      code: `$updateCommands
  
  $interactionFollowUp[Códigos actualizados, no dude en probar de nuevo.]
  
  $interactionDefer[true]
  
  $onlyForIDs[834904556101828708;744035326049386518;Este comando no es para ti, es para mis dueños..{options:{ephemeral}}{extraOptions:{interaction}}]
      `
    }]