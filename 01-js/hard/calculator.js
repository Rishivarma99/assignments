/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

// class Calculator {


//    constructor(){
//       this.result = 0;
//    }
//    add(n){
//     let temp = this.result ;
//     temp = temp + n ;
//       this.result = temp ;
//    }
//    subtract(n){
//     this.result -= n ;
//    }
//    multiply(n){
//     this.result *= n ;
//    }
//    divide(n){
//     this.result = this.result /n ;
//    }
//    clear(){
//     this.result = 0 ;
//    }
//    getResult(){
//     return this.result;
//    }


// }




// let obj1 = new Calculator();

// obj1.add(10);
// const ans = obj1.getResult();
// console.log(ans);

// // obj1.subtract(2);
// // obj1.getResult();

// // obj1.divide(2);
// // obj1.getResult();

// // obj1.multiply(2);
// // obj1.getResult();

// // obj1.clear();
// // obj1.getResult();


class Calculator {
  constructor() {
    this.result = 0;
  }

  add(n) {
    this.result += n;
  }

  subtract(n) {
    this.result -= n;
  }

  multiply(n) {
    this.result *= n;
  }

  divide(n) {
    if (n === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= n;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  // Function to handle spaces and parse expressions
  parseExpression(expression) {
    // Remove leading/trailing spaces
    expression = expression.trim();

    // Regular expression for numbers and operators
    const operators = /[+\-*/()]/;
    const tokens = expression.split(operators); // Split based on operators
    const stack = []; // Stack for operands and operators

    // Loop through tokens
    for (const token of tokens) {
      const trimmedToken = token.trim(); // Remove spaces around each token
      if (!isNaN(trimmedToken)) { // If it's a number, push it to the stack
        stack.push(parseFloat(trimmedToken));
      } else if (operators.test(trimmedToken)) { // If it's an operator
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        let result;
        switch (trimmedToken) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "/":
            result = operand1 / operand2;
            break;
          default:
            throw new Error("Invalid operator: " + trimmedToken);
        }
        stack.push(result); // Push the result back to the stack
      } else { // Invalid character
        throw new Error("Invalid character in expression: " + trimmedToken);
      }
    }

    if (stack.length !== 1) {
      throw new Error("Invalid expression format");
    }

    return stack.pop(); // Return the final result
  }

  calculate(expression) {
    try {
      this.result = this.parseExpression(expression);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

module.exports = Calculator;
