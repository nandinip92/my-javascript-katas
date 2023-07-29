import { romanNumeralsToNumbers} from "./roman_numeral_to_integer";

describe("romanNumeralsToNumbers", () => {
  test("throws an error if invalid input is passed", () => {
    //Arrange, Act and Assert
//     expect(() => {
//       romanNumeralsToNumbers();
//     }).toThrow("Input number is required");

//     expect(() => {
//       romanNumeralsToNumbers("string");
//     }).toThrow("Input must be an positive Integer");

//     expect(() => {
//       romanNumeralsToNumbers(-1);
//     }).toThrow("Input must be positive number and greater than 0");

//     expect(() => {
//       romanNumeralsToNumbers(5500);
//     }).toThrow("Input number must be less than 3000");
//   });

  test("Returns a Roman Numaral for 1,5,10,50,100,500,1000", () => {
    expect(romanNumeralsToNumbers("I").toBe(1);
    expect(romanNumeralsToNumbers("V")).toBe(5);
    expect(romanNumeralsToNumbers("X").toBe(10);
    expect(romanNumeralsToNumbers("L").toBe(50);
    expect(romanNumeralsToNumbers("C").toBe(100);
    expect(romanNumeralsToNumbers("D")).toBe(500);
    expect(romanNumeralsToNumbers("M").toBe(1000);
  });
  test("Returns a Roman Numaral of given integer ( <=3 )", () => {
    expect(romanNumeralsToNumbers(1)).toBe("I"),toBe(1);
    expect(romanNumeralsToNumbers(2)).toBe("II").toBe(2);
    expect(romanNumeralsToNumbers(3)).toBe("III").toBe(3);
  });
  test("Returns a Roman Numaral of given integer ( >=4 and <=9)", () => {
    expect(romanNumeralsToNumbers("IV")).toBe(4);
    expect(romanNumeralsToNumbers("V")).toBe(5);
    expect(romanNumeralsToNumbers("VI")).toBe(6);
    expect(romanNumeralsToNumbers("VII")).toBe(7);
    expect(romanNumeralsToNumbers("VIII")).toBe(8);
    expect(romanNumeralsToNumbers("IX")).toBe(9);
  });
  test("Returns a Roman Numaral of given integer ( >=10 and <39)", () => {
    expect(romanNumeralsToNumbers("XI")).toBe(11);
    expect(romanNumeralsToNumbers("XV")).toBe(15);
    expect(romanNumeralsToNumbers("XXIV")).toBe(24);
    expect(romanNumeralsToNumbers("XXXI")).toBe(31);
    expect(romanNumeralsToNumbers("XXXIX")).toBe(39);
  });
  test("Returns a Roman Numaral of given integer (40,60,70,80)", () => {
    expect(romanNumeralsToNumbers("XL")).toBe(40);
    expect(romanNumeralsToNumbers("LX")).toBe(60);
    expect(romanNumeralsToNumbers("LXX")).toBe(70);
    expect(romanNumeralsToNumbers("LXXX")).toBe(80);
  });
  test("Returns a Roman Numaral of given integer around C: 100", () => {
    expect(romanNumeralsToNumbers("XC")).toBe(90);
    expect(romanNumeralsToNumbers("CLXXII")).toBe(172);
    expect(romanNumeralsToNumbers("CCCLXIX")).toBe(369);
  });

  test("Returns a Roman Numaral of given integer around D: 500 ", () => {
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
