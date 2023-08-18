const { AoiClient, LoadCommands } = require("aoi.js");
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const fs = require('fs');
const config = require("./src/config");

const bot = new AoiClient({
    token: config.token,
    prefix: config.prefix,
    intents: config.intents,
    events: config.events, 
    database: {
        type: "aoi.mongo",
        db: require("aoi.mongo"),
        tables: ["main"],
        path: "mongodb+srv://Neuss:7LRzH1VB0FMSrdkE@cluster0.q2zrc.mongodb.net/?retryWrites=true&w=majority",
    }    
});
mongoose.connect('mongodb+srv://Neuss:7LRzH1VB0FMSrdkE@cluster0.q2zrc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {  console.log('Conexión a MongoDB establecida correctamente.');
});

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