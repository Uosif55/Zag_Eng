let num1;
let operators = ["+", "-", "*", "/"];
let operator;
let num2;

do {
  num1 = Number(prompt("Enter num1"));
  operator = prompt("Enter operator");
  num2 = Number(prompt("Enter num2"));
} while (isNaN(num1) || isNaN(num2) || !operators.includes(operator));

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Wrong Operator");
    break;
}
