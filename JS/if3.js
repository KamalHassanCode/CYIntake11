//3 Write an if statement to check if this number is possitive, negative or zero
let num = -2;


let operation = Prompt("Enter operation (+, -, *, /):");
let num1 = parseFloat(Prompt("Enter the first number:"));
let num2 = parseFloat(Prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("That aint a number");
    return;
}
if (operator === "+") {
    add(num1, num2)
} else if (operator === "-") {
    sub(num1, num2,)
}else if (operator === "*") {
     sub(num1, num2,)
}else if (operator === "/") {
    sub(num1, num2,)
}