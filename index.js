//http://jsbin.com/pupazuyano/edit?js,console

/* create variables */

/**
* #1
* Variables with a String as their value
*
* Declare variables named `firstName`, `lastName`, and `birthPlace`.
* Fill out the values for these with your own data or make it up. It should contain a String
**/

var firstName = "Wendell";
var lastName = "Wade";
var birthPlace ="Chicago";


console.log("firstName:" , firstName);
console.log("lastName:" , lastName);
console.log("birthPlace:" , birthPlace);

 

//#2
 var favoriteNumber = 1506;
 var currentyear = 2016;
 var thatOnePrinceSong = 1999;

 console.log ("favoriteNumber:" , + favoriteNumber);
 console.log ("currentyear" , + currentyear);
 console.log ("thatOnePrinceSong" , + thatOnePrinceSong);


  
/**
* #3
* Variables with Boolean values
*
* Declare variables named `isDaytime`, `isLeftHanded`, `inHawaii`, and `isHappyCoding`
* Their values should be a Boolean
**/



 var isDaytime = true;
 var isLeftHanded = false;
 var isHappyCoding = true;

 console.log("isDaytime" , + isDaytime);
 console.log("isLeftHanded" , + isLeftHanded);
 console.log("isHappyCoding" , + isHappyCoding);

 

  

/**
* #4
* Variables with null
*
* Declare variables named `enrolledAtDevLeague` and `completedFridayPrep`
* Their values should be a Null value

var




**/

var enrolledAtDevleague = null;
var completedFridayPrep = null;

console.log("enrolledAtDevleague" , enrolledAtDevleague);
console.log("enrolledAtDevleague" , enrolledAtDevleague);


var hawaiianislands =["oahu" ,"Maui" , "Lanai" , "Niihau" ,"BigIsland" ,"Molokini"];

console.log(hawaiianislands);

 


 
 
/**
* #5a
* Variables with an Array for it's value. This Array will contain:
*
* Declare a variable named `westCoast` which is an Array. This Array contains the names of all the states
* which can be found along the west coast of The United States.
**/


 
/**
* #5b
* Variables with an Array for it's value. This Array will contain:
*
* Declare a variable named `evenNumbers` which is an Array. This Array contains numbers that
* are considered 'even values'. Have at least ten even values in this array.
**/



 
/**
* #6a Arithmetic
* Variables with the outcome of an arithmetic operation:
* 
* Declare a variable named `sumOfNumbers` which is a Number. This Number contains the result of performing an arithmetic
* operation on two numbers. Have this variable store the result of adding 3 numbers of your choosing.
*
* Extend this behavior to include subtraction, multiplication and division. 
*/
var sumOfNumbers = 2 + 2 + 2;
var differenceofNumbers =6 - 4 -1;
var productsofNumbers = 2*4*6;


console.log(sumOfNumbers)
 
/**






* #6b Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named 'isEqual' which is a Boolean. This Boolean contains the result of performing a comparison to
* test if two strings are equal. We want to compare the two strings "Tacocat" and "tacocat" and console.log() the result.
*
* BONUS: See if you can come up with a few examples of double comparison operator(==) vs triple comparison operator(===)
*/

 var isEqual ="Tacocat"== "tacocat";
 console.log(isEqual)

/**
* #6c Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named generalContainer. This variable will be used to store multiple types of
* values as we `assign` them to show how variables in JavaScript are not bound to a single data type
* and can change values.
*
* Write 5 different assignment statements and `console.log()` the value of the variable after each 
* assignment statement to show the current value.
*/
 
var generalContainer = 7;
console.log("generalContainer" + generalContainer);

generalContainer = generalContainer +=1;
console.log(generalContainer);

generalContainer = generalContainer +=2
console.log(generalContainer)


 



/**
* #7a
* Declare Functions
*
* Declare a Function named `jump` which takes a single argument, `height`
*
* This function should return a String along the lines of, "You Jumped 9 feet high!"
* if invoked in this way -> jump(9);
*
* Store the return value to a variable and use console.log to inspect the value which was passed back by your function
**/

 function jump(height){

return "You jumped " + height + " feet high";


 }
jump(9);
console.log (jump(9));




/*function jump(height){*/
  /*console.log("You jumped " + height + " feet high!");*/
  /*return "You jumped " + height + " feet high!";
}*/


/*jump();*/
/*jump();*/

/*var hops = jump(11);
console.log(hops);*/


/**
* #7b
* Declare Functions
*
* Declare a Function named `cook` which a takes three arguments/parameters, `ingredient1`, `ingredient2`, `recipeName`
*
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/
 
function cook(ingredient1, ingredient2, recipeName){

	return ingredient1 +  " and " +  ingredient2  +  " make a " + recipeName + "!";
}

cook("Tomatoes" ,  "Onion" , "Cheese");

console.log(cook("Tomatoes" , "Onion" , "Pizza"))

/*function cook(ingredient1, ingredient2, recipeName){
  return ingredient1 + " and " + ingredient2 + " make a " + recipeName + "!";
}*/

/*cook("tomatoes", "cheese", "pizza");*/

/*var dinner = cook("natto", "uni", "pizza");
console.log(dinner);*/










/**
* #7c
* Declare Functions
*
* declare Function named
* Their values should be a Number
**/
/*
function sum(n1, n2){
  return n1 + n2;
}
console.log(sum(1, 2));*/