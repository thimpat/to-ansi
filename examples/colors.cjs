const toAnsi = require("../index.cjs");

console.log(toAnsi.fromHexa("#00FF00"), "aaaaaa");
console.log(toAnsi.fromColor("red"), "Text in red");
console.log( toAnsi.getTextFromColor("Text in green", {fg: "green"}) );

console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFFF00"}) );

console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFFF00"}) );
console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFFF00", bg: "#0000FF"}) );
console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFCCFF", bg: "#DD00FF", isUnderline: true}) );
