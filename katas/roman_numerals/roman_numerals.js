/* 
googleclassroom link for the assignment: https://classroom.google.com/c/NTYzNzA2NDA5MDg2/a/NjE2NTcwODU4OTQw/details

Source of this kata: https://codingdojo.org/kata/RomanNumerals/ 
*/

export function numbersToRomanNumerals(inputNumber) {
  const romanNumerals = {
    ones: {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
    },
    tens: {
      10: "X",
      20: "XX",
      30: "XXX",
      40: "XL",
      50: "L",
      60: "LX",
      70: "LXX",
      80: "LXXX",
      90: "XC",
    },
    hundreds: {
      100: "C",
      200: "CC",
      300: "CCC",
      400: "CD",
      500: "D",
      600: "DC",
      700: "CM",
    },
    thousands: { 1000: "M", 2000: "MM", 3000: "MMM" },
  };

  const splitNumber = inputNumber.toString().split("");
  //consolePrintStatements("splitNumber", splitNumber);
  const places = ["ones", "tens", "hundreds", "thousands"];
  const placeValues = [1, 10, 100, 1000];

  let romanNumeralResult = splitNumber.reverse().map((digit, index) => {
    const digitPlace = places[index];
    const digit_key = parseInt(digit) * placeValues[index];
    return romanNumerals[digitPlace][digit_key];
  });
  return romanNumeralResult.reverse().join("");
}

function consolePrintStatements(txt, variable) {
  console.log(`${txt} =`);
  console.log(variable);
}
//numbersToRomanNumerals(3);
