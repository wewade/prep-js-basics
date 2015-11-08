/* create variables */

/**
* #1
* Variables with a String as their value
*
* declare variables named `first_name`, `last_name`, and `birth_place`.
* Fill out the values for these with your own data or make it up. It should contain a String
**/

var first_name = 'puggy';
var last_name = "squishy";
var birth_place = 'tokyo';


/**
* #2
* Variables with a Number as their value
*
* declare variables named `favorite_number`, `current_year`, and `that_one_prince_song`.
* Their values should be a Number
**/

var favorite_number = 3;
var current_year = 2015;
var that_one_prince_song = 1999;


/**
* #3
* Variables with Boolean values
*
* declare variables named `isDaytime`, `isLeftHanded`, `inHawaii`, and `isHappyCoding`
* Their values should be a Boolean
**/

var isDaytime = false;
var isLeftHanded = false;
var inHawaii = true;
var isHappyCoding = true;



/**
* #4
* Variables with null
*
* declare variables named `enrolledAtDevLeague` and `completedFridayPrep`
* Their values should be a Null value
**/

var enrolledAtDevLeague = null;
var completedFridayPrep = null;

/**
* #5a
* Variables with an Array for it's value. This Array will contain:
*
* declare a variable named `west_coast` which is an Array. This Array contains the names of all the states
* which can be found along the west coast of The United States.
**/

var west_coast = ["Oregon", "Washington", "California", "Utah", "Nevada"];

/**
* #5b
* Variables with an Array for it's value. This Array will contain:
*
* declare a variable named `even numbers` which is an Array. This Array contains numbers that
* are considered 'even values'. Have at least ten even values in this array
**/

var even_numbers = [2, 4, 6, 8];

/**
* #6a Arithmetic
*/

var sum = 5 + 8;
var difference = 2 - 1;
var multiply = 3 * 9;
var divide = 8 / 2;



/**
* #6b Comparisons & Logic
*/

var pass = result > 70;
var fail = result < 70;
var excel = result === 100;




/**
* #6c Assignments
*/

var breakfast = "fruits" + "pancakes";
var fruits = bananas++;
var pancakes = flapjacks += shortstack;


/**
* #7a
* Declare Functions
*
* declare a Function named `jump` which takes a single argument, `height`
*
* this function should return a String along the lines of, "You Jumped 9 feet high!"
* if invoked in this way -> jump(9);
*
* store the return value to a variable and use console.log to inspect the value which was passed back by your function
**/

function jump(height){
  var jumped = height;
  console.log(jumped);
  return "You jumped ' + height + ' feet high!" ;
}

/**
* #7b
* Declare Functions
*
* declare a Function named `cook` which a takes a three arguments, `ingredient1`, `ingredient2`, `recipeName` 
*
* this function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/


function cook(ingredient1, ingredient2, recipeName){
  return "ingredient1 ' + 'and ' + ' ingredient2 ' + 'make a ' + ' recipeName";
}

console.log(cook('tomatoes', 'cheese', 'pizza'));

/**
* #7c
* Declare Functions
*
* declare Function named
* Their values should be a Number
**/

function sum(n1, n2){
  return n1 + n2;
}
console.log(sum(1, 2));