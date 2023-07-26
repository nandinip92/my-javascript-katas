import { numbersToRomanNumerals } from "./roman_numerals";

describe("numbersToRomanNumerals", () => {
  test("Returns a Roman Numaral for 1,5,10,50,100,500,1000", () => {
    expect(numbersToRomanNumerals(1)).toBe("I");
    expect(numbersToRomanNumerals(5)).toBe("V");
    expect(numbersToRomanNumerals(10)).toBe("X");
    expect(numbersToRomanNumerals(50)).toBe("L");
    expect(numbersToRomanNumerals(100)).toBe("C");
    expect(numbersToRomanNumerals(500)).toBe("D");
    expect(numbersToRomanNumerals(1000)).toBe("M");
  });
  test("Returns a Roman Numaral of given integer ( <=3 )", () => {
    expect(numbersToRomanNumerals(1)).toBe("I");
    expect(numbersToRomanNumerals(2)).toBe("II");
    expect(numbersToRomanNumerals(3)).toBe("III");
  });
  test("Returns a Roman Numaral of given integer ( >=4 and <=9)", () => {
    expect(numbersToRomanNumerals(4)).toBe("IV");
    expect(numbersToRomanNumerals(5)).toBe("V");
    expect(numbersToRomanNumerals(6)).toBe("VI");
    expect(numbersToRomanNumerals(7)).toBe("VII");
    expect(numbersToRomanNumerals(8)).toBe("VIII");
    expect(numbersToRomanNumerals(9)).toBe("IX");
  });
  test("Returns a Roman Numaral of given integer ( >=10 and <39)", () => {
    expect(numbersToRomanNumerals(11)).toBe("XI");
    expect(numbersToRomanNumerals(15)).toBe("XV");
    expect(numbersToRomanNumerals(24)).toBe("XXIV");
    expect(numbersToRomanNumerals(31)).toBe("XXXI");
    expect(numbersToRomanNumerals(39)).toBe("XXXIX");
  });
  test("Returns a Roman Numaral of given integer (40,60,70,80)", () => {
    expect(numbersToRomanNumerals(40)).toBe("XL");
    expect(numbersToRomanNumerals(60)).toBe("LX");
    expect(numbersToRomanNumerals(70)).toBe("LXX");
    expect(numbersToRomanNumerals(80)).toBe("LXXX");
  });
  test("Returns a Roman Numaral of given integer around C: 100 (90", () => {
    expect(numbersToRomanNumerals(90)).toBe("XC");
    expect(numbersToRomanNumerals(172)).toBe("CLXXII");
    expect(numbersToRomanNumerals(369)).toBe("CCCLXIX");
  });
});
