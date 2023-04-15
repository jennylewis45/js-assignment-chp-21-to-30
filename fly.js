let weights = prompt("Enter your weight in kilograms:");
let weight = parseFloat(weights); 

if (weight){ 
  document.write("Your weight is " + weight + " kilograms."); 
}else{
    document.write("Invalid input. Please enter a number")
}



const secretNumber = Math.floor(Math.random() * 10) + 1;
const gues = (prompt("Guess a number between 1 and 10:"));
if (gues === secretNumber) {
  document.write("Congratulations, you guessed the secret number!");
} else {
  document.write(`Sorry, the secret number was ${secretNumber}`);
}
