/* 
googleclassroom link for the assignment: https://classroom.google.com/c/NTYzNzA2NDA5MDg2/a/NjE2NTcwODU4OTQw/details

Source of this kata: https://codingdojo.org/kata/RomanNumerals/ 
*/

export function numbersToRomanNumerals(inputNumber) {
  // const romanNumerals = {
  // 1: "I",
  // 5: "V",
  // 10: "X",
  // 50: "L",
  // 100: "C",
  // 500: "D",
  // 1000: "M",
  // };
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integerValues = Object.values(romanNumerals);
  let resultStack = [];
  //Checking if the number is greater than 5 or lessthan 5
  if (inputNumber < 5) {
    if (inputNumber == 4) {
      resultStack.push(5, -1);
    } else {
      let sum = 0;
      while (sum < inputNumber) {
        sum += 1;
        resultStack.push(1);
      }
    }
  }
  //console.log(resultStack);

  const resultRomanArray = resultStack.map((num) => {
    return Object.keys(romanNumerals).find((key) => romanNumerals[key] === num);
  });

  //console.log(resultRomanArray);

  return resultRomanArray.join("");
}

//numbersToRomanNumerals(3);
