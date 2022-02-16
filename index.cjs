const COLOR_TYPE = {
    Foreground: 38,
    Background: 48,
};

const RESET = "\x1b[0m";

const FONT_STYLE = {
    Bold     : "\x1b[1m",
    Underline: "\x1b[4m",
    Reversed : "\x1b[7m",
};

/**
 * @see [Code and original author]
 *     {@link https://stackoverflow.com/questions/15682537/ansi-color-specific-rgb-sequence-bash}
 * @param red
 * @param green
 * @param blue
 * @returns {number}
 */
const rgbToAnsi256 = (red, green, blue) =>
{
    if (red === green && green === blue)
    {
        if (red < 8)
        {
            return 16;
        }

        if (red > 248)
        {
            return 231;
        }

        return Math.round(((red - 8) / 247) * 24) + 232;
    }

    return 16
        + (36 * Math.round(red / 255 * 5))
        + (6 * Math.round(green / 255 * 5))
        + Math.round(blue / 255 * 5);
};

/**
 * @see [Code and original author]
 *     {@link https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139}
 * @param hex
 * @returns {{red: number, green: number, blue: number}|null}
 */
const hexToRgb = (hex) =>
{
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b)
    {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red  : parseInt(result[1], 16),
        blue : parseInt(result[2], 16),
        green: parseInt(result[3], 16)
    } : {};
};

const hue2rgb = function hue2rgb(p, q, t)
{
    if (t < 0)
    {
        t += 1;
    }
    if (t > 1)
    {
        t -= 1;
    }
    if (t < 1 / 6)
    {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2)
    {
        return q;
    }
    if (t < 2 / 3)
    {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
};

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 * @see [Original code and author] {@link https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion}
 *
 * @param   {number}  hue       The hue
 * @param   {number}  saturation       The saturation
 * @param   {number}  lightness       The lightness
 * @return  {Array}           The RGB representation
 */
const hslToRgb = ({hue, saturation, lightness}) =>
{
    let r, g, b;

    if (saturation === 0)
    {
        r = g = b = lightness; // achromatic
    }
    else
    {
        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        r = hue2rgb(p, q, hue + 1 / 3);
        g = hue2rgb(p, q, hue);
        b = hue2rgb(p, q, hue - 1 / 3);
    }

    return {
        red  : Math.round(r * 255),
        blue : Math.round(b * 255),
        green: Math.round(g * 255)
    };
};

function getAnsiFromRgb({red, blue, green}, isForeground = true)
{
    const code = rgbToAnsi256(red, blue, green);

    let ground = isForeground ? COLOR_TYPE.Foreground : COLOR_TYPE.Background;
    return `\x1b[${ground};5;` + code + "m ";
}

function getAnsiFromHexa(hexa, isForeground)
{
    const {red, green, blue} = hexToRgb(hexa);
    return getAnsiFromRgb({red, green, blue}, isForeground);
}

function getAnsiFromHsl({hue, saturation, lightness}, isForeground)
{
    const {red, green, blue} = hslToRgb({hue, saturation, lightness});
    return getAnsiFromRgb({red, green, blue}, isForeground);
}

module.exports.getAnsiFromRgb = getAnsiFromRgb;
module.exports.fromRgb = getAnsiFromRgb;

module.exports.getAnsiFromHexa = getAnsiFromHexa
module.exports.fromHexa = getAnsiFromHexa;

module.exports.getAnsiFromHsl = getAnsiFromHsl
module.exports.fromHsl = getAnsiFromHsl

module.exports.RESET = RESET

module.exports.STYLE = {
    Bold     : "\x1b[1m",
    Underline: "\x1b[4m",
    Reversed : "\x1b[7m",
};

// for (let i = 0; i < 16; ++i)
// {
//
//     for (let ii = 0; ii < 16; ++ii)
//     {
//         const codeColor = getAnsiFromRgb(i, ii);
//
//         // "\x1b[31m"
//         process.stdout.write(FONT_STYLE.Bold + "Abeilles");
//         process.stdout.write(RESET);
//         // print u"\u001b[0m"
//     }
// }
