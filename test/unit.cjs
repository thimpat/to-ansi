const chai = require("chai");
const {getTextFromRgb, getTextFromHex, getTextFromHsl, getTextFromColor, hexToRgb, rgbToAnsi256, hue2rgb} = require("../index.cjs");
const expect = chai.expect;
const chaiAlmost = require("chai-almost");

chai.use(chaiAlmost());

describe("The module", () =>
{
    describe("#hue2rgb", () =>
    {
        it("should return a 235 when the input is a level of grey", function ()
        {
            const result = hue2rgb(-0.5, 0.34, 1.5);
            expect(result).to.almost.equal(0.34);
        });

        it("should return a 235 when the input is a level of grey", function ()
        {
            const result = hue2rgb(-0.5, 0.34, -0.5);
            expect(result).to.almost.equal(0.34);
        });

        it("should return a 235 when the input is a level of grey", function ()
        {
            const result = hue2rgb(-0.5, 0.34, 0.1);
            expect(result).to.almost.equal(0.004);
        });

    });

    describe("#rgbToAnsi256", () =>
    {
        it("should return a 235 when the input is a level of grey", function ()
        {
            const result = rgbToAnsi256(43, 43, 43);
            expect(result).to.equal(235);
        });

        it("should return a 231 when the input is a bright level of white/grey", function ()
        {
            const result = rgbToAnsi256(255, 255, 255);
            expect(result).to.equal(231);
        });
    });

    describe("#hexToRgb", () =>
    {
        it("should return rgb white when hex is white", function ()
        {
            const result = hexToRgb("#fff");
            expect(result).to.deep.equal({red: 255, blue: 255, green: 255});
        });
    });

    describe("#getTextFromRgb", () =>
    {
        it("should return a formatted text for terminal when given rbg colors", function ()
        {
            const result = getTextFromRgb("Hey! you", {fg: {red: 255, green: 0, blue: 0}});
            expect(result).to.contain("[38;5;196m Hey! you");
        });
    });

    describe("#getTextFromHex", () =>
    {
        it("should return a formatted text for terminal when given hex colors", function ()
        {
            const result = getTextFromHex("Hey! you", {fg: "#00AA00", bg: "#CC4400"});
            expect(result).to.contain("[48;5;166m Hey! you");
        });
    });

    describe("#getTextFromColor", () =>
    {
        it("should return a formatted text for terminal when given color name", function ()
        {
            const result = getTextFromColor("Hey! you", {fg: "green", bg: "orange"});
            expect(result).to.contain("[38;5;34m \u001b[48;5;214m Hey! you");
        });

        it("should return a formatted text for terminal when given invalid color name", function ()
        {
            const result = getTextFromColor("Hey! you", {fg: "ddd"});
            expect(result).to.equal("Hey! you\u001b[0m");
        });
    });

    describe("#getTextFromHsl", () =>
    {
        it("should return a formatted text for terminal when given hsl colors", function ()
        {
            const result = getTextFromHsl("Okay", {
                fg         : {hue: 0.5, saturation: 0.5, lightness: 0.5},
                bg         : {hue: 0, saturation: 0, lightness: 0},
                isUnderline: true,
                isReversed : true,
                isBold     : true
            });
            expect(result).to.contain("[7mOkay");
        });

    });

});