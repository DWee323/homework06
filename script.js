//this is HOMEWORK SHEET

//pompt the user once for their first name and save their answer to the variable first_name.
var first_name = prompt("Please type in your first name.");

//Prompt the user once for their last name and save their answer to the variable last_name.
var last_name = prompt("Please type in your last name.");

//Create a function called full_name that takes first_name and last_name as parameters and returns "first space last". For example, "Ali" and "Karbassi" should return "Ali Karbassi". Then call full_name, save it in a variable and output the variable to the console.
function full_name(x, y) {
    let z = x + " " + y;
    return z;
}

var firstLastName = full_name(first_name, last_name);

console.log(firstLastName);

//Create a function called last_first that takes first_name and last_name as parameters and returns "last comma space last". For example, "Ali" and "Karbassi" should return "Karbassi, Ali". Then call full_name, save it in a variable and output the variable to the console.
function last_first(x, y) {
    let z = y + ", " + x;
    return z;
}

var lastFirstName = last_first(first_name, last_name);

console.log(lastFirstName);

//Prompt the user once for their age and save their answer to the variable age. Convert their age to an integer.
var age = prompt("Enter your current age.");
age = parseInt(age);
//console.log(age);

//Create a function called over18 that takes age as it's only parameter. This function should return true or false if the age passed in is 18 or older. For example, age(17) returns false, age(18) returns true, and age(999) returns true. Return false if age is not a number. Hint: Google isNan().

/*
if (DRINKING_AGE < age) {
    console.log("Can drink!");
} else if (DRINKING_AGE === age){ //==여도 되지만, 더 확실히 하기위해 === 사용
    console.log("Welcome to the world of drinking!");
} else {
    console.log("Too young to drink!");
}
*/

function over18(x) {
    if (isNaN(x)) {
    return 'Not a Number!';
    }
    let z = (x >= 18);
    return z;
}

var ageTruth = over18(age);
//console.log(ageTruth);

//Create a function called to_celcius that takes a float parameter for degree Fahrenhet and converts it to Celcius. For example, to_celcius(32) will return 0. Be sure to test it.

//Create a function called to_fahrenhet that takes a float parameter for degree Celcius and converts it to Fahrenhet. For example, to_fahrenhet(32) will return 89.6. Be sure to test it.
