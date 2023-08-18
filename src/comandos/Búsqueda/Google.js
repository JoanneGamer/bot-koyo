module.exports = ({
    name: "google",
    code: `
$title[**GOOGLE**]
$thumbnail[https://media.discordapp.net/attachments/1074893592201543681/1122389071310901288/7611770.png]
$description[
**Buscaste:**
> \`$message\`
**Resultado:** [$message](https://www.google.com/search?q=$message&source=lmns&bih=773&biw=391&client=ms-android-samsung-gj-rev1&prmd=isvn&hl=es-419&sa=X&ved=2ahUKEwirwcCO0N3_AhWVK2IAHev1AjQQ0pQJKAB6BAgAEA)]
$footer[@MobStudios]
$color[FFFFFF]
$argsCheck[>0;¿Qué quieres buscar?]

$onlyIf[$checkContains[$message;https://www.xnxx.com;https;https://;discord.gg/;https://discord.gg/]==true;]`
})