//1 Create a loop that console.logs from 1 to 10
console.log("1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

//2 Create a loop that console.logs from 0 to 10
console.log("0 to 10");
for (let i = 0; i <= 10; i++) {
  console.log(i)
}
//3 Create a loop that console.logs from 10 to 1
console.log("10 to 1");
for (let i = 10; i >= 1; i--) {
  console.log(i)
}

//4 Create a loop that console.logs every even number from 0 to 50 

console.log("Even Number");
for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}

//5 Create a loop that will count from 0 to 100, using the loop try to find what the random number is. when you find it, stop the loop
console.log("RandomNum");


let randomNum = Math.floor(Math.random() * 101);
console.log("Random number:", randomNum);
for (let i = 0; i <= 100; i++) {
  if (i === randomNum) {
    console.log("Found the random number:", i);
    break;
  }
}

// Create a loop that will console.log every letter in the word "Howdy"
console.log("Word");
console.log("Howdy"[0]);

for (let i = 0; i < 5; i++) {
  console.log("Howdy"[i])
}

// Write some code that will count to 10, 10 times


for (let times = 0; times < 10; times++) {
  for (let i = 0; i < 12; i++) { console.log(i) }
}

// Write a loop that will run 50 times. Check each number to see if it is a multiple of 3

console.log("3s");
for (let i = 1; i <= 50; i++) {
  if(i%3===0) {
console.log(i + "is a mutiple of 3")
  }
}


// Write a loop that will check each letter in a word and console.log if it is a vowel or not.
let Word = "Link";
for (let i = 0; i < Word.length; i++) {
    const letter = Word[i].toUpperCase();
    if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
        console.log(`${letter} is a vowel`);
    } else {
        console.log(`${letter} is not a vowel`);
    }
}


  // Write a loop that will take any word and reverse it

  let reverserino = "Meredith grey";
  let reversed = "";
  
  for (let i = reverserino.length - 1; i >= 0; i--) {
      reversed += reverserino[i];
  }
  console.log(reversed);