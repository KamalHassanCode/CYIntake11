// Using an array method, add the string "World" to this array
let helloWorld = ["Hello"];
helloWorld.push("World");
console.log(helloWorld);

// Using an array method, remove the last element from the array
let oneTwoThree = [1,2,3,4];
oneTwoThree.pop();
console.log(oneTwoThree);

// Using an array method, add the word "Lorem" to the start of the following array
let loremIpsum = [ "ipsum", "dolor", "sit", "amet."];
loremIpsum.splice(0,1, "Lorem")
console.log(loremIpsum)

// Create a sentence out of the following array
let sentence = ["The","quick","brown","fox","jumps","over","the","lazy","dog"]
let joinedSentence = sentence.join(" ");
console.log(joinedSentence);


// Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]
weekDays = []
weekDays.push("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
 console.log("Method One:", weekDays)




console.log(weekDays); 

//Fix this code so that there will never be a duplicate number added to the array
     let values = [];
for (let i = 0; i < 5; i++) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 11);
    } while (values.includes(randomNumber)); // Check for duplicates
    values.push(randomNumber);
}

console.log(values);


    

    // Add everyone from the toBeAdded array to the banList;


    let toBeAdded = ["Jomsly", "Henrick", "Darsha"]
    let banList = ["Budly","Gurtrood","dimsly"]
    for (let i = 0; i < toBeAdded.length; i++) {
    banList.push(toBeAdded[i]);
}

console.log(banList);



    // using the map method, Create a new array for the tax on each transaction

 let transactions = [599.99, 22.21, 10.18, 108.97, 45.52];

 let taxRate = 0.13; 
 let taxOnTransactions = transactions.map(transaction => transaction * taxRate);

console.log(taxOnTransactions);