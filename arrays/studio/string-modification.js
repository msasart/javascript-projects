const input = require('readline-sync');
let str = "LaunchCode";
let lettersInput = input.question(`Enter a number between 1 and ${str.length} `)

if (lettersInput > str.length || lettersInput < 1){
    console.log(`Oops! Your number does not meeting our guidelines. ${str} is only ${str.length} letters long. We have defaulted the value to 3. Please pick a number between 1 and ${str.length}.`)
    lettersInput = 3
}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(lettersInput) + str.slice(0,lettersInput);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`You have turned the word ${str} into the pig latin word ${str2}`);

//2) Modify your code to accept user input. Query the usßer to enter the number of letters that will be relocated.


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
