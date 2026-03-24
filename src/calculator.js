/** 
 * Adds 2 numbers together
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number} the sum of a and before
 */

function add(a, b) {
  return a + b;
}
/**
 * Subtracts 2 numbers 
 * @param {number} a - the first number
 * @param {number} a - the second number
 * @returns {number} the subracted sum of the numbers
 * */
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function calculateWithDiscount(value1, value2, operationType, hasDiscount) {
  let result;

  if (operationType === "add") {
    result = add(value1, value2);
  } else if (operationType === "multiply") {
    result = multiply(value1, value2);
  } else {
    throw new Error("Unknown operation type");
  }

  if (hasDiscount) {
    result = result > 100 ? result * 0.9 : result * 0.95;
  }

  return result;
}

