/* 
googleclassroom link for the assignment: https://classroom.google.com/c/NTYzNzA2NDA5MDg2/a/NjE2NTcwODU4OTQw/details

Source of this kata: https://codingdojo.org/kata/RomanNumerals/ 
*/

function getRomanNumerals(closestValue, inputNumber) {
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
  // consolePrintStatements("integerValues", integerValues);

  //Check if the given number is in the romanNumerals dictionary
  if (integerValues.includes(inputNumber)) {
    let romanKey = Object.keys(romanNumerals).find(
      (key) => romanNumerals[key] === inputNumber
    );
    closestValue.push(romanKey);
    return closestValue;
  }
  // diffValues to store difference between the given inpuNumber and romanNumerals dictionary values
  let diffValues = {};
  Object.entries(romanNumerals).forEach(
    ([key, value]) => (diffValues[key] = inputNumber - value)
  );
  //consolePrintStatements("diffValues", diffValues);

  //closest +ve number to the given inputNumber ==>(smallest +ve integer)
  let minDiffUpperBound = Object.keys(romanNumerals)
    .filter((k) => diffValues[k] > 0)
    .reduce((minKey, currKey) =>
      diffValues[currKey] < diffValues[minKey] ? currKey : minKey
    );

  //closest -ve number to the given InputNumber ==>(largest -ve integer)
  let minDiffLowerBound = Object.keys(romanNumerals)
    .filter((k) => diffValues[k] < 0)
    .reduce((maxKey, currKey) =>
      diffValues[currKey] > diffValues[maxKey] ? currKey : maxKey
    );

  // consolePrintStatements("minDiffLowerBound", minDiffLowerBound);
  // consolePrintStatements("minDiffUpperBound", minDiffUpperBound);

  if (integerValues.includes(Math.abs(diffValues[minDiffLowerBound]))) {
    let romanKey = Object.keys(romanNumerals).find(
      (key) => romanNumerals[key] === Math.abs(diffValues[minDiffLowerBound])
    );
    closestValue.push(romanKey, minDiffLowerBound); // eg: for 4 it  is 5 -1 so closestValue = [I,V]
  } else {
    closestValue.push(minDiffUpperBound, diffValues[minDiffUpperBound]); //eg: for 7 it is 5+2 so closestValue = [V,2]
  }

  //if the top/last element of closestValue is a number the 'getRomanNumerals' will be called
  if (typeof closestValue[closestValue.length - 1] === "number") {
    getRomanNumerals(closestValue, closestValue.pop()); //eg: for 7 getRomanNumerals([V],2)
  }

  // consolePrintStatements("closestValue", closestValue);
  return closestValue;
}

export function numbersToRomanNumerals(inputNumber) {
  const romanNumerals = getRomanNumerals([], inputNumber);
  return romanNumerals.join("");
}

function consolePrintStatements(txt, variable) {
  console.log(txt);
  console.log(variable);
}
//numbersToRomanNumerals(3);
