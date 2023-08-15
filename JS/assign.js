// Write a function for addition, subtraction, multiplication, and division. Have all functions return the value.
function addition(Num1, Num2) {
    console.log(Num1 + Num2)
}
addition(1, 2) 


function subtraction(Num10, Num7) {
    console.log(Num10 - Num7)
}
subtraction(10, 7)

function multiplication(Num1, Num3) {
    console.log(Num1 * Num3)
}
multiplication(1, 3)

function division(Num9, Num3) {
    console.log(Num9 / Num3)
}
division(9, 3)

// Bonus, try using default parameters to avoid returning NaN on any of the functions

// Write a function that will console.log a madlib. use prompt(); to get a noun, adverb, verb, and an adjective from the user.


function Text(Mountain, Swiftly, Explore, Majectic) {
    console.log("My " + noun + " jskdfj " + verb + " sdhf " + adjective + adverb)
}

// Write a function that will return a random number from 0 - 100;
// Random number generator
function randNum (a) {
    a = Math.floor(Math.random()*100);
    console.log("Random Number: ", a)
}
randNum();
