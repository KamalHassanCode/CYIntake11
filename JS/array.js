//1 Create an array of four numbers
let Numarr = ("3, 5, 6, 9")
console.log(Numarr)


//2 Create an array of strings.
let arr = ["hi", "my", "name", "is", "kamal"]
console.log(arr)

//3 Console.log the 4th item in the array;

//4 Using a for loop console.log every element in this array

let sentenceArray = ["This", "Code", "youth", "group", "is", "awesome"]
for (let i = 0; i < sentenceArray.length; i++) {
    console.log(sentenceArray[i]);
}

//5 Loop through the array until you find the word language, when you find it console.log it's index in the array
let words = ["A", "sentence", "is", "the", "basic", "unit", "of", "language", "which", "expresses", "a", "complete", "thought"]

for (let i = 0; i < words.length; i++) {
    if (words[i] === "language") {
        console.log("Index of 'language':", i);
        break;
    }
}

//6 Find the sum of all the numbers in the array
let cart = [5.99, 11.59, 4.01, 25.78, 508.99, 12.00];
let sum = 0;

for (let i = 0; i < cart.length; i++) {
  sum += cart[i];
}

console.log("The sum of the numbers in the array is:", sum);

//7 Check if any elements appear in both arrays. If they do, console.log that they are banned

let inLine = ["Thomas", "Jurimo", "Wemby", "Grimold", "Fomsly"];
let banned = ["Wemby", "Frombert", "Thirna", "Thomas", "Jurimo"];