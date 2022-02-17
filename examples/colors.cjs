const toAnsi = require("../index.cjs");
console.log(toAnsi.fromHexa("#00FF00"));

console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFFF00"}) );
console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFFF00", bg: "#0000FF"}) );
console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFCCFF", bg: "#DD00FF", isUnderline: true}) );
