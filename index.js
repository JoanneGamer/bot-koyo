const { AoiClient, LoadCommands } = require("aoi.js");
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const fs = require('fs');
///Configuramos para que reconozca que valla todo en la carpeta "src" y a la carpeta "config"
const config = require("./src/config");

const bot = new AoiClient({
    ///decimos que el token, prefix, los intents y eventos, va a estar en la carpeta "config"
    token: config.token,
    prefix: config.prefix,
    intents: config.intents,
    events: config.events, 
    ///se asigna una base de datos a aoi.mongo
    database: {
        type: "aoi.mongo",
        db: require("aoi.mongo"),
        tables: ["main"],
        ///Link de su base de datos
        path: "",
    }    
});
///Nuevamente el link
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {  console.log('Conexión a MongoDB establecida correctamente.');
});

////Sistema de anticrash, su funcion es para que no se apague mientras algo salio mal
//Anticrash
const files = fs.readdirSync('./src/events').filter(file => file.endsWith('js'))
files.forEach( x => {
    require(`./src/events/${x}`)(bot)
});
//Slash
bot.interactionCommand({
    name: "ping",
    prototype: "slash",
    code: `$interactionReply[Pong! $pingms;;;;everyone;false]`
});

//s&v
require('./src/bot/status.js')(bot);
require('./src/bot/variables.js')(bot);

//Healder 
const loader = new LoadCommands(bot)
loader.load(bot.cmd, './src/comandos/')
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgRed"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
})
