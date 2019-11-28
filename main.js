 
// TASK 1

var a = 15;
var b = -2;
var c = 22;
var d = 0;
var e = 13;

if (a > b && a > c && a > d && a > e) {
    console.log("Larger number is " + a);
} else if (b > a && b > c && b > d && b > e) {
    console.log("Larger number is " + b);
} else if (c > a && c > b && c > d && c > e) {
    console.log("Larger number is " + c);
} else if (d > a && d > c && d > b && d > e) {
    console.log("Larger number is " + d);
} else {
    console.log("Larger number is " + e);
}



// TASK 2

var a = 3;
var b = -7;
var c = 2;

if (a * b * c > 0) {
	console.log("The sign is +");
} else {
	console.log("The sign is -");
}



// TASK 3

var statement = "Hello World";

switch (statement) {
	case "Hello World":
		console.log("Ciao mondo");
	case "Hello World":
		console.log("Hallo Welt");
	case "Hello World":
		console.log("Bonjour le monde");
	case "Hello World":
		console.log("Hola Mundo");
	default:
		console.log("Hello World");
}



// TASK 4

var userAge = 30;

var check = userAge >= 28 ? true : false;

if (!check) {
	console.log("User is less than 28 years old");
} else if (userAge != 28) {
	console.log("User is older than 28");
} else {
	console.log("User is 28");
}
