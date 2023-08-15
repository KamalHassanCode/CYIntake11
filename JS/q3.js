// Find the total cost of all the items, then find the cost of tax. Finally display the Total, Tax, and Total + tax as a dollar value;
//Tax formula (total * tax) / 100


let skateboard = 5.99;

let fryingPan = 11.99;

let piano = 12.99;

let table = 199.99;

let notebook = 4.59;

let total = skateboard + fryingPan + piano + table + notebook;
let tax = total * 13 / 100
let final = total + tax;

console.log(total);
console.log(tax); 
console.log(final);