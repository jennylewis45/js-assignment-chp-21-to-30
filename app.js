var num = prompt("enter a positive number")
document.write(num)
var roundnum = Math.round(num)
document.write(roundnum)
document.write("<br>")
var floornum = Math.floor(num)
document.write(floornum)
document.write("<br>")

var ceilnum = Math.ceil(num)
document.write(ceilnum)
document.write("<br>")


var num = prompt("enter a negative number")
document.write(num)
var roundnum = Math.round(num)
document.write(roundnum)
document.write("<br>")
var floornum = Math.floor(num)
document.write(floornum)
document.write("<br>")

var ceilnum = Math.ceil(num)
document.write(ceilnum)
document.write("<br>")


let number = prompt("Enter a number: ");
let abs_val = Math.abs(number);
document.write(`The absolute value of ${number} is ${abs_val}`);


const diceValue = Math.floor(Math.random() * 6) + 1;
document.write(`The dice rolled: ${diceValue}`);


const coinValues = Math.random();

const coinSides = coinValues < 0.5 ? "heads" : "tails";

document.write(`The coin landed on ${coinSides}!`);




const randomNumber = Math.floor(Math.random() * 100) + 1;
document.write(`Your random number is: ${randomNumber}`);


