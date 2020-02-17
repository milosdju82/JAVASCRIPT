
// TASK 1

function Student(name, lastName, age, averageGrade) {

	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.averageGrade = averageGrade;
}

var studentOne = new Student("Dragan", "Petrovic", 23, 8);
var studentTwo = new Student("Marina", "Paunovic", 24, 9);
var studentThree = new Student("Zoe", "Drobnjak", 21, 10);
var studentFour = new Student("Goran", "Lukic", 25, 7);

console.log(studentOne, studentTwo, studentThree, studentFour);




// TASK 2

function Players(name, age, goals, nationality, yellowCards) {

	this.name = name;
	this.age = age;
	this.goals = goals;
	this.nationality = nationality;
	this.yellowCards = yellowCards;
}

var playerOne = new Players("Hakim Ziyech", 26, 10, "Marocco", 1);
var playerTwo = new Players("Dusan Tadic", 31, 13, "Serbia", 5);
var playerThree = new Players("Donny van de Beek", 22, 14, "Netherlands", 6);
var playerFour = new Players("Quincy Promes", 28, 17, "Netherlands", 5);
var playerFive = new Players("Lisandro Martínez", 22, 2, "Argentina", 6);

console.log(playerOne, playerTwo, playerThree, playerFour, playerFive);




// TASK 3

var ajaxPlayers = [
	["Hakim", "Ziyech", 26, 10, "Marocco", 1], 
	["Dusan",  "Tadic", 31, 13, "Serbia", 5], 
	["Donny", "van de Beek", 22, 14, "Netherlands", 6], 
	["Quincy", "Promes", 28, 17, "Netherlands", 5], 
	["Lisandro", "Martinez", 22, 2, "Argentina", 6]
];

function PlayersLoop(player) {

	this.name = player[0];
	this.lastName = player[1]
	this.age = player[2];
	this.goals = player[3];
	this.nationality = player[4];
	this.yellowCards = player[5];
}

for (var i = 0; i < ajaxPlayers.length; i++) {
	this[ajaxPlayers[i][0].toLowerCase()] = new PlayersLoop(ajaxPlayers[i]);
}

console.log(hakim, dusan, donny, quincy, lisandro);




// TASK 4

function Operation(numOne, numTwo, operation) {

	this.firstNumber = numOne;
	this.secondNumber = numTwo;
	this.method = function() {
		return operation(this.firstNumber, this.secondNumber);
	};
}

function add(numOne, numTwo) {
	var result = numOne + numTwo;
	return result;
}

function substract(numOne, numTwo) {
	var result = numOne - numTwo;
	return result;
}

function multiply(numOne, numTwo) {
	var result = numOne * numTwo;
	return result;
}

function divide(numOne, numTwo) {
	var result = numOne / numTwo;
	return result;
}

var addition = new Operation(20, 20, add);
console.log(addition.method());

var substraction = new Operation(40, 10, substract);
console.log(substraction.method());

var multiplication = new Operation(10, 2, multiply);
console.log(multiplication.method());

var division = new Operation(20, 2, divide);
console.log(division.method());
