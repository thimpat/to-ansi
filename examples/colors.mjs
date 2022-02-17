import {fromHexa, getTextFromHex} from "../index.mjs";
console.log(fromHexa("#00FF00"));

console.log( getTextFromHex("Hello you!", {fg: "#FFFF00"}) );
console.log( getTextFromHex("Hello you!", {fg: "#FFFF00", bg: "#0000FF"}) );
console.log( getTextFromHex("Hello you!", {fg: "#FFCCFF", bg: "#DD00FF", isUnderline: true}) );
