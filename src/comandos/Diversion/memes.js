module.exports = {
    name: "memes",
    code: `
   $title[Memes Random]
   $color[#ffffff]]
   $image[$get[memes]]
   $djsEval[(async() => {
   const Memes = require('meme-muichiro-spanish')
   const meme = await Memes()
   d.vars['memes'] = meme.data.url
   d.data.vars = d.vars
   })()]`
   }