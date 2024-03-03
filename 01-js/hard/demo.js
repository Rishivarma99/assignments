// class Calculator {
  
//      constructor(intialValue){
//         this.result = intialValue;
//      }
//      add(n){
//         this.result +=  n ;

//      }
//      subtract(n){
//       this.result -= n ;
//      }
//      multiply(n){
//       this.result *= n ;
//      }
//      divide(n){
//       this.result = this.result /n ;
//      }
//      clear(){
//       this.result = 0 ;
//      }
//      getResult(){
//       console.log(this.result);
//      }
  
  
//   }
  
//   let obj1 = new Calculator(0);
//   obj1.add(10);
//   obj1.getResult();
  

  parseExpression(expression) 
  {
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