module.exports = [{
    name: "top",
    $if: "old",
    code: ` 
    $if[$checkContains[$toLowerCase[$message];global]==true]
      $title[:dollar: TOP GLOBAL]
      $description[
        $description[
        $globalUserLeaderBoard[all;asc;{top} - {username} - {value}]]
      $color[#ffffff]
    $endif
    $if[$checkContains[$toLowerCase[$message];bank]==true]
      $title[Top Bank]
      $description[
        $globalUserLeaderBoard[bank;asc;{top} - {username} - {value}]]
        $color[#ffffff]
    $endif
    $if[$checkContains[$toLowerCase[$message];coin]==true]
      $title[Top Coin]
      $description[
        $globalUserLeaderBoard[coin;asc;{top} - {username} - {value}]]
        $color[#ffffff]
    $endIf
$onlyif[$getglobaluservar[blacklist]==false;He detectado que usted esta en la blacklist del bot por la siguiente razon
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con un **administrador**.]
`
}]