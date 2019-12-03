 
// TASK 1

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {

	dataNew[i] = dataOld[i];

} console.log(dataNew);



// TASK 2

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var j = dataOld.length - 1; j >= 0; j--) {

	dataNew[dataOld.length - 1 - j] = dataOld[j];

} console.log(dataNew);



// TASK 3

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
var i = 0;

while (i < dataOld.length) {

	dataNew[2 + i] = dataOld[i];
	i++;

} console.log(dataNew);



// TASK 4

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {

	c[i] = a[i];

} for ( var j = a.length; j < a.length + b.length; j++) {

	c[j] = b[j - a.length];

} console.log(c);



// TASK 5

var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {

	c[i * 2] = a[i];

} for (var j = 0; j < b.length; j++) {

	c[j * 2 + 1] = b[j];

} console.log(c);



// TASK 6

for (var i = 1; i < 7; i++) {

	var stars = "";

	for (var j = 0; j < i; j++) {

		stars += "*";

	} console.log(stars);
}



// TASK 7

var stars = "";
var x = 6;
var y = 11;

for (var i = 0; i < x; i++) {

	for (var j = 0; j < y; j++) {

		if (j > 0 && j < 10 && i > 0 && i < 5) {
			stars += " ";

		} else {
			stars += "*";
		}

	} stars += "\n";

} console.log(stars);