/**
 * Returns ANSI code for given RGB color
 * @param {RGBType}
 * @param {boolean} isForeground
 * @returns {string}
 */
export function fromRgb({ red, blue, green }: RGBType, isForeground?: boolean): string;
/**
 * Returns ANSI code for given hexadecimal color
 * @param {string} hexa
 * @param {boolean} isForeground
 * @returns {string}
 */
export function fromHexa(hexa: string, isForeground?: boolean): string;
/**
 * Returns ANSI code for given HSL color
 * @param {HSLType}
 * @param {boolean} isForeground
 * @returns {string}
 */
export function fromHsl({ hue, saturation, lightness }: HSLType, isForeground: boolean): string;
/**
 * Return ANSI code color for a given value
 * @param {string|Object} okayColor Actual name color (i.e. orange, yellow) or color code (#00F00F)
 * @param isForeground
 * @returns {string}
 */
export function fromColor(okayColor: string | any, isForeground?: boolean): string;
export function getTextFromRgb(text: any, { fg, bg, isUnderline, isBold, isReversed }: {
    fg?: {};
    bg?: {};
    isUnderline?: boolean;
    isBold?: boolean;
    isReversed?: boolean;
}): any;
/**
 *
 * @param text
 * @param fg
 * @param bg
 * @param isUnderline
 * @param isBold
 * @param isReversed
 * @returns {*}
 */
export function getTextFromHsl(text: any, { fg, bg, isUnderline, isBold, isReversed }: {
    fg?: {};
    bg?: {};
    isUnderline?: boolean;
    isBold?: boolean;
    isReversed?: boolean;
}): any;
export function getTextFromHex(text: any, { fg, bg, isUnderline, isBold, isReversed }: {
    fg?: string;
    bg?: string;
    isUnderline?: boolean;
    isBold?: boolean;
    isReversed?: boolean;
}): any;
/**
 * Return colorized text based on given value
 * @param text
 * @param {ColorPropType} props
 * @returns {string}
 */
export function getTextFromColor(text: any, props?: ColorPropType): string;
export const RESET: string;
export namespace FONT_STYLE {
    const Bold: string;
    const Underline: string;
    const Reversed: string;
}
export namespace STYLE {
    const Bold_1: string;
    export { Bold_1 as Bold };
    const Underline_1: string;
    export { Underline_1 as Underline };
    const Reversed_1: string;
    export { Reversed_1 as Reversed };
}
export function rgbToAnsi256(red: number, green: number, blue: number): number;
export function hexToRgb(hex: any): {
    red: number;
    green: number;
    blue: number;
} | null;
export function rgbToHex({ red, green, blue }: {
    red: any;
    green: any;
    blue: any;
}): string;
export function rgbStringToRgb(rgbString: any): {
    red: number;
    green: number;
    blue: number;
};
export function rgbStringToHex(rgbString: any): string | {
    red: number;
    green: number;
    blue: number;
};
export function hue2rgb(p: any, q: any, t: any): any;
export function hslToRgb({ hue, saturation, lightness }: HSLType): any[];
export function colorNameToHex(colour: string): boolean | any;
declare namespace _default {
    export { fromRgb };
    export { fromHexa };
    export { fromHsl };
    export { fromColor };
    export { getTextFromRgb };
    export { getTextFromHsl };
    export { getTextFromHex };
    export { getTextFromColor };
    export { colorNameToHex };
    export { hslToRgb };
    export { hexToRgb };
    export { rgbToHex };
    export { rgbToAnsi256 };
    export { rgbStringToRgb };
    export { rgbStringToHex };
    export { hue2rgb };
    export { RESET };
    export { FONT_STYLE };
    export { STYLE };
}
export default _default;
export type RGBType = {
    red: number;
    green: number;
    blue: number;
};
export type HSLType = {
    hue: number;
    lightness: number;
    saturation: number;
};
/**
 * Return colorized text based on given value
 */
export type ColorPropType = {
    /**
     * colourName Actual name color (i.e. orange, yellow), color code (#00F00F), or
     * color object
     * (rgb, hsl)
     */
    fg?: string | RGBType | HSLType;
    /**
     * colourName Actual name color (i.e. orange, yellow) or color code (#00F00F)
     */
    bg?: string | RGBType | HSLType;
    isUnderline?: boolean | null;
    isBold?: boolean | null;
    isReversed?: boolean | null;
};
