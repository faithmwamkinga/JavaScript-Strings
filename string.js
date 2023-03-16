/*
Extract the first four characters from the string below;
"beautiful"*/
let word = "beautiful";
console.log(word.charAt(0));
console.log(word.charAt(1));
console.log(word.charAt(2));
console.log(word.charAt(3));

let number = 100;
let num = "100";
console.log(number===num);
console.log(number!==num);
// console.log(number.loosely==num);
console.log("strictly not equal",number!==num);
console.log("loosely equal",number===num);
console.log("loosely not equal",number!==num);
console.log("strictly equal",number===num);

/*Insert the following string at the tenth index of the below variable:
"eat"
const food = "I did not have appetite today" */
// const food = "I did not have appetite today"

const food = "I did not have appetite today"
let indx = 10;
let word1 = "eat";
//from 0 count ten then at ten add a string "eat"
let output = food.slice(0,indx)+ word1 +  "today";
console.log(output);

/*Count how many times the following string appears in the string variable:
1. "the"
2."s"
const story= "She sells sea shells at the sea shore" */
const story= "She sells sea shells at the sea shore"
const otherstory = "the";
const myword = story.split(otherstory).length-1;
console.log(myword);
const story2 = "s";
const verb = story.split(story2).length-1;
console.log(verb);


let words = "CONfidant";
let word2 = ("amazing", "beautiFUL");
let sentence = "A busy office";
console.log(words.toUpperCase());
console.log(word2.toLowerCase());
//sentence.split(" ").toLowerCase();

//indexOf()
const three = "i love love rain";
console.log(three.indexOf("rain"));
//eg rain it considers the first index of a substring
//gives the index of the last love last character
//last index
const four = "i love rain";
console.log(three.lastIndexOf("love"));

//startsWith check the 1st char of a string
const five = "i love rain";
console.log(five.startsWith("i"))

//endsWith
const six = "i love rain";
console.log(six.endsWith("rain"));

//string toUpperCase()
const seven = "i love rain";
console.log(seven.toUpperCase());

//string.capitalize
//converts the first substring to uppercase

//to lowerCase
const eight = "I LOVE RAIN";
console.log(eight.toLowerCase());

//string include -checks if a substring is in the string
const nine = "i love rain";
console.log(nine.includes("checks"));

//string repeat - creates a new string by repeating the given string a number of times.
const ten = "i  love rain";
console.log(ten.repeat(4));

//string charAt
const eleven = "i love rain";
console.log(eleven.charAt(7));

//string length
const one = "i love rain";
console.log(one.length);


//string replace
//const two = "i love mama";
//console.log(two.replace("i love mama", "i love baba"));
//by using index 
// alternative console.log(two.replace(two[0],"a"));

/*1. "market"
const string1 = "The lady went to the market with her sister";
2. "season"
const string2 = "My favorite season is spring" */
const string1 = "The lady went to the market with her sister";
console.log(string1.slice(20,27));

const string2 = "My favorite season is spring"
console.log(string2.slice(12,18));

