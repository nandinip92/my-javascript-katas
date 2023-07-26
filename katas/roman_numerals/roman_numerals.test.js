import { numbersToRomanNumerals } from "./roman_numerals";

describe("numbersToRomanNumerals", () => {
  test("Returns a Roman Numaral of given ineger ( <=3 )", () => {
    expect(numbersToRomanNumerals(1)).toBe("I");
    expect(numbersToRomanNumerals(2)).toBe("II");
    expect(numbersToRomanNumerals(3)).toBe("III");
  });
  test("Returns a Roman Numaral of given ineger ( >=4 )", () => {
    expect(numbersToRomanNumerals(4)).toBe("IV");
    //expect(numbersToRomanNumerals(5)).toBe("V");
  });
});
