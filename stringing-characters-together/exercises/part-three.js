//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));

//2. Witheeout using slice(), use method chaining to accomplish the same thing.
let intial = language.slice(0,1)+language.slice(4,5);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abberviation for ${language} is ${intial}.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let practice = language.slice(1, 3).charAt(3).indexOf();
console.log(practice);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.replace("t","T").replace("c","C"));
