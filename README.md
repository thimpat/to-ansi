
[![Test workflow](https://github.com/thimpat/to-ansi/actions/workflows/test.yml/badge.svg)](https://github.com/thimpat/to-ansi/blob/main/README.md)
[![nycrc Coverage](https://img.shields.io/nycrc/thimpat/to-ansi?preferredThreshold=lines)](https://github.com/thimpat/to-ansi/blob/main/README.md)
[![Version workflow](https://github.com/thimpat/to-ansi/actions/workflows/versioning.yml/badge.svg)](https://github.com/thimpat/to-ansi/blob/main/README.md)
[![npm version](https://badge.fury.io/js/to-ansi.svg)](https://www.npmjs.com/package/to-ansi)
<img alt="semantic-release" src="https://img.shields.io/badge/semantic--release-19.0.2-e10079?logo=semantic-release">



## Convert HTML, RGB or HSL to ANSI

### Installation

```shell
npm install to-ansi
```


---

### Usage

#### With commonJs

```javascript
const toAnsi = require("to-ansi");
```

#### With ESM

```javascript
import "toAnsi" from "to-ansi";
```

---

### Examples

#### Convert Hex, RGB and HSL to ANSI
```javascript
toAnsi.fromHexa("#00FF00");                      // => \x1b[38;5;46m 
toAnsi.fromRgb({red: 0, blue: 0, green: 255})    // => \x1b[38;5;46m 
toAnsi.fromHsl({hue: 0.5, saturation: 0.5, lightness: 0.5})
```

#### Apply colors to the console via the **fromHexa** function
```javascript
console.log(
    toAnsi.fromHexa("#00FF00") +
    toAnsi.fromHexa("#FF0000", false) +
    toAnsi.STYLE.Underline +
    toAnsi.STYLE.Bold +
    "Okay" +
    toAnsi.RESET
);

```

![](https://github.com/thimpat/to-ansi/blob/main/docs/images/example-1.png)


#### Apply colors to the console via the **getText** function (Recommended way)

```javascript
// Yellow
console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFFF00"}) );

// Yellow with blue background
console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFFF00", bg: "#0000FF"}) );

// Yellow-ish on purple-lish
console.log( toAnsi.getTextFromHex("Hello you!", {fg: "#FFCCFF", bg: "#DD00FF", isUnderline: true}) );
```

![img.png](https://github.com/thimpat/to-ansi/blob/main/docs/images/example-2.png)


