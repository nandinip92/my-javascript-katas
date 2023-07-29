import { romanNumeralsToNumbers } from "./roman_numerals_to_numbers";

describe("romanNumeralsToNumbers", () => {
  test("throws an error if invalid input is passed", () => {
    //Arrange, Act and Assert
    expect(() => {
      romanNumeralsToNumbers();
    }).toThrow("Inavlid input, please enter a roman Value");

    expect(() => {
      romanNumeralsToNumbers(456);
    }).toThrow("Inavlid input, please enter a roman Value");
  });

  test("Returns equivalent number to the given Roman Numeral", () => {
    expect(romanNumeralsToNumbers("I")).toBe(1);
    expect(romanNumeralsToNumbers("V")).toBe(5);
    expect(romanNumeralsToNumbers("X")).toBe(10);
    expect(romanNumeralsToNumbers("L")).toBe(50);
    expect(romanNumeralsToNumbers("C")).toBe(100);
    expect(romanNumeralsToNumbers("D")).toBe(500);
    expect(romanNumeralsToNumbers("M")).toBe(1000);
  });

  test("Returns equivalent number to the given Roman Numeral( <=3 )", () => {
    expect(romanNumeralsToNumbers("I")).toBe(1);
    expect(romanNumeralsToNumbers("II")).toBe(2);
    expect(romanNumeralsToNumbers("III")).toBe(3);
  });
  test("Returns equivalent number to the given Roman Numeral ( >=4 and <=9)", () => {
    expect(romanNumeralsToNumbers("IV")).toBe(4);
    expect(romanNumeralsToNumbers("V")).toBe(5);
    expect(romanNumeralsToNumbers("VI")).toBe(6);
    expect(romanNumeralsToNumbers("VII")).toBe(7);
    expect(romanNumeralsToNumbers("VIII")).toBe(8);
    expect(romanNumeralsToNumbers("IX")).toBe(9);
  });
  test("Returns equivalent number to the given Roman Numeral ( >=10 and <39)", () => {
    expect(romanNumeralsToNumbers("XI")).toBe(11);
    expect(romanNumeralsToNumbers("XV")).toBe(15);
    expect(romanNumeralsToNumbers("XXIV")).toBe(24);
    expect(romanNumeralsToNumbers("XXXI")).toBe(31);
    expect(romanNumeralsToNumbers("XXXIX")).toBe(39);
  });
  test("Returns equivalent number to the given Roman Numeral (40,60,70,80)", () => {
    expect(romanNumeralsToNumbers("XL")).toBe(40);
    expect(romanNumeralsToNumbers("LX")).toBe(60);
    expect(romanNumeralsToNumbers("LXX")).toBe(70);
    expect(romanNumeralsToNumbers("LXXX")).toBe(80);
  });
  test("Returns equivalent number to the given Roman Numeral around C: 100", () => {
    expect(romanNumeralsToNumbers("XC")).toBe(90);
    expect(romanNumeralsToNumbers("CLXXII")).toBe(172);
    expect(romanNumeralsToNumbers("CCCLXIX")).toBe(369);
  });

  test("Returns equivalent number to the given Roman Numeral D: 500 ", () => {
    expect(romanNumeralsToNumbers("CD")).toBe(400);
    expect(romanNumeralsToNumbers("CDI")).toBe(401);
    expect(romanNumeralsToNumbers("CDXX")).toBe(420);
    expect(romanNumeralsToNumbers("CDXLVII")).toBe(447);
    expect(romanNumeralsToNumbers("CDXLVIII")).toBe(448);
  });

  test("Tests for larger numbers", () => {
    expect(romanNumeralsToNumbers("MCMXCVIII")).toBe(1998);
    expect(romanNumeralsToNumbers("MMDCCLI")).toBe(2751);
  });
});
