/* 
googleclassroom link for the assignment: https://classroom.google.com/c/NTYzNzA2NDA5MDg2/a/NjE2NTcwODU4OTQw/details

Source of this kata: https://codingdojo.org/kata/RomanNumerals/ 
*/

function getRomanNumeralValue(inputRoman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //console.log(`inputRoman: ${inputRoman} = ${romanNumerals[inputRoman]}`);
  return romanNumerals[inputRoman];
}

function getNumber(currentSymbol, previousSymbol, num) {
  const currentSymbolValue = getRomanNumeralValue(currentSymbol);
  const previousSymbolValue = getRomanNumeralValue(previousSymbol);

  //1.1 If the current symbol is greater than the previous symbol,
  //subtract twice the value of the previous symbol from the result.
  //For example, IV represents 4 because I is less than V, so we add 1 and then subtract 2, resulting in 4.
  //1.2 Otherwise, add the value of the current symbol to the result.

  currentSymbolValue > previousSymbolValue
    ? (num = num - previousSymbolValue * 2 + currentSymbolValue)
    : (num += currentSymbolValue);
  return num;
}

/*Algorithm:
Loop through each symbol of the Roman numeral from left to right:
1.1 If the current symbol is greater than the previous symbol, 
    subtract twice the value of the previous symbol from the result. 
    For example, IV represents 4 because I is less than V, so we add 1 and then subtract 2, resulting in 4.
1.2 Otherwise, add the value of the current symbol to the result.
*/

export function romanNumeralsToNumbers(inputRoman) {
  if (inputRoman === undefined)
    throw new Error("Inavlid input, please enter a roman Value");
  if (typeof inputRoman === "number")
    throw new Error("Inavlid input, please enter a roman Value");

  inputRoman = inputRoman.split("");
  let resultNum = 0;

  //Loop through each symbol of the Roman numeral from left to right:
  inputRoman.forEach((symbol, index) => {
    resultNum =
      index === 0
        ? getRomanNumeralValue(symbol)
        : getNumber(symbol, inputRoman[index - 1], resultNum);
  });

  return resultNum;
}
