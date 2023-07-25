import { numbersToRomanNumerals } from "./roman_numerals";

describe("numbersToRomanNumerals", () => {
  test("Returns a Roman Numaral to given ineger", () => {
    expect(numbersToRomanNumerals(1)).toBe("I");
  });
});
