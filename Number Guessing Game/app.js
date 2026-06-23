const max = prompt("Enter the maximum number for the guessing game:");

const random = Math.floor(Math.random() * max) + 1;


let guess = prompt("Guess the number:");
let chance = 3;
while(chance > 0){
    chance--;
    console.log(`You have ${chance} chances left.`);
    if(chance === 0){
    console.log(`Game Over! The number was ${random}`);
    }
    if(guess == "quit"){
        console.log("You have quit the game.");
        break;
    }
    else if(guess == random){
        console.log("Congratulations! You guessed the correct number: " + random);
        break;
    }
    else if(guess < random){
        guess = prompt("Too low! Please try again.");
    }
    else{
        guess = prompt("Too high! Please try again.");
    }
}
