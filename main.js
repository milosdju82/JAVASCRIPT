
// TASK 1

var text = "Lorem ipsum dolor sit amet";


function transformText(loremIpsumText) {

	var transformed = text.toLowerCase();
	console.log(transformed);
};

transformText(text);



// TASK 2

function checkText(loremIpsumText, findWord) {

	if (loremIpsumText.includes(findWord.toLowerCase())) {
		console.log("The word " + findWord.toUpperCase() + " does exists in sentence");
	} else {
		console.log("The word " + findWord.toUpperCase() + " does not exists in sentence");
	}
};

checkText(text, "sit");



// TASK 3

function findLastLetter(loremIpsumText) {

	console.log(text.charAt(text.length - 1));
};

findLastLetter(text);



// TASK 4

function splitText(loremIpsumText) {
	var newText = text.split(" ", 3);
	console.log(newText);
};

splitText(text);



// TASK 5

var text = "Piter is an actor."

function modyfyText(piterAgain) {

	var e = piterAgain.indexOf("e");
	var o = piterAgain.indexOf("o");

	piterAgain = piterAgain.substring(0, e) + "o" + piterAgain.substring(e + 1);
	piterAgain = piterAgain.substring(0, o) + "e" + piterAgain.substring(o + 1);

	return piterAgain;
};

var newText = modyfyText(text);
console.log(newText);



// TASK 6

var someData = [34, 23, 14, 56, 23, 44, 65];
var removeNumber = 56;

function removeElement(data, num) {

	var index = data.indexOf(num);
	if (index > -1) {
		data.splice(index, 1);
	}
	return data;
};

var newArray = removeElement(someData, removeNumber);
console.log(newArray);



// TASK 7

var someOtherData = [34, 23, 14, 56, 23, 44, 65];

function repackArray(data) {
	data.shift();

	var newArray = data.slice(0, 3);
	var arrayEnd = data.slice(3, 6).reverse();
	var otherData = newArray.concat(arrayEnd);

	console.log(otherData);
};

repackArray(someOtherData);



// TASK 8

var someNewData = [334, 233, 212, 199, 154, 122];

function repackReduceArr(arr) {

	var reducedArray = arr.map(function(element) {
		if (arr.indexOf(element) == 0) {
			return element;
		} else return element - arr[arr.indexOf(element) - 1];
	});
	console.log(reducedArray);
};

repackReduceArr(someNewData);



// TASK 9

var students = [
	{
		name: "Jim",
		avgGrade: 8.5556
	},
	{
		name: "Mike",
		avgGrade: 8.5492
	},
	{
		name: "Anna",
		avgGrade: 8.9322
	},
	{
		name: "Jack",
		avgGrade: 8.6111
	},
	{
		name: "Tom",
		avgGrade: 7.8623
	}
];

var average = 8.5;

function averageGrade(object, grade) {

	var toPass = object.filter(function(element) {
		return element.avgGrade > grade;
	});

	toPass.forEach(function(element) {
		element.avgGrade = element.avgGrade.toFixed(2);
	});

	console.log("Students above average", toPass);
	return toPass;
};

averageGrade(students, average);
