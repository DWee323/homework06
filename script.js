var first_name = prompt("Please type in your first name.");

var last_name = prompt("Please type in your last name.");


function full_name(x, y) {
    let z = x + " " + y;
    return z;
}

var firstLastName = full_name(first_name, last_name);
console.log(firstLastName);


function last_first(x, y) {
    let z = y + ", " + x;
    return z;
}

var lastFirstName = last_first(first_name, last_name);
console.log(lastFirstName);


var age = prompt("Enter your current age.");
age = parseInt(age, 10);


function over18(x) {
    if (isNaN(x)) {
    return 'Not a Number!';
    }
    let z = (x >= 18);
    return z;
}

var ageTruth = over18(age);


//you had a typo in Farenheit (left out the i). My var name includes an i.
//C = (F-32)*5/9  <-> F = 9/5*C+32
function to_celcius(x) {
    let c = (x - 32) * 5/9;
    return c;
}

//below was not asked in the assignment prompt, but for interactive testing I put it there. 
//One other way that I could've tested is: type in console.log(to_celcius(32)); then check the console if the value is zero.
var fInput = prompt("Enter a Farenheit value of temparature you want to convert to Celcius.");
fInput = parseFloat(fInput);

var cValue = to_celcius(fInput);
console.log(cValue);


function to_fahrenheit(x) {
    let f = x * 9/5 + 32;
    return f;
}

//analogous to previous task
var cInput = prompt("Enter a Celcius value of temparature you want to convert to Farenheit.");
cInput = parseFloat(cInput);

var fValue = to_fahrenheit(cInput);
console.log(fValue);