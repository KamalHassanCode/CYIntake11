//5 Using if, else if, and else, console.log the letter grade of the student.
// F: < 50 | D: 50 - 60 | C: 60 - 70 | B: 70 - 80 | A: 80 - 100

let grade = Math.floor(Math.random()*100) //Random grade each time the code runs
     

      if (grade < 50) {
        console.log("F");
    } else if (grade >= 50 , grade < 60) {
        console.log("D");
    } else if (grade >= 60 , grade < 70) {
        console.log("C");
    } else if (grade >= 70 , grade < 80) {
        console.log("B");
    } else {
        console.log("A")
}

//6 Choose which function will run based on the opperator variable

let num1 = 10;
let num2 = 7;
let operator = "+";
function add(num1, num2) {
    console.log(num1 + num2);
}
function sub(num1, num2) {
    console.log(num1 - num2);
}
if (operator === "+") {
    add(num1, num2)
} else if (operator === "-") {
    sub(num1, num2,)
} else {
    console.log("Error");
}



