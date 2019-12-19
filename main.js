
// TASK 1

function getArray(numbers) {

	var reversed = [];

	for (var i = numbers.length - 1; i >= 0; i--) {
		reversed[numbers.length - 1 - i] = numbers[i];
	}

	console.log(reversed);
}

getArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



// TASK 2

function dataType(types) {

	console.log("Type of recived data is " + typeof types)
}

dataType("abc");
dataType(10);
dataType(false);



// TASK 3

function sixNames(arrNames) {

	var longestName = "";

	for (var i = 0; i < arrNames.length; i++) {
		if (arrNames[i].length > longestName.length) {
			longestName = arrNames[i];
		}
	}
	console.log("The longest name is " + longestName);
}

sixNames(["Merkur", "Mars", "Jupiter", "Saturn", "Uran", "Neptun"]);



// TASK 4

function getSecondLowest(list) {
	var lowest = list[0];
	var secondLowest = list[1];

	if (secondLowest < lowest) {
		var temp = lowest;
		lowest = secondLowest;
		secondLowest = temp;

	} for (var i = 0; i < list.length; i++) {
		if (list[i] < lowest) {
			lowest = list[i];

	} else if (list[i] < secondLowest && list[i] > lowest) {
		secondLowest = list[i];
		}
	}
	return secondLowest;
}

function getSecondGreatest(list) {
	var greatest = list[0];
	var secondGreatest = list[1];

	if (secondGreatest > greatest) {
		var temp = greatest;
		greatest = secondGreatest;
		secondGreatest = temp;
	
	} for (var i = 0; i < list.length; i++) {
		if (list[i] > greatest) {
			greatest = list[i];

	} else if (list[i] > secondGreatest && list[i] < greatest) {
		secondGreatest = list[i];
		}
	}
	return secondGreatest;
}

function getSecondNumbers(list) {
	var secondLowest = getSecondLowest(list);
	var secondLargest = getSecondGreatest(list);

	var exportedValues = [secondLowest, secondLargest];

	console.log(exportedValues);

	return exportedValues;
}

getSecondNumbers([70, 42, 18, 55, 13, 97, 6, 23]);



// TASK 5 

function calculate(numsArr, number) {

	var newArr = [];

	for (var i = 0; i < numsArr.length; i++) {
		if (numsArr[i] > number) {
			newArr[newArr.length] = numsArr[i];
		}
	}
	return newArr;
}

function firstFunction(numsArr, number) {

	var biggerNumbers = calculate(numsArr, number);

	console.log(biggerNumbers);
}

firstFunction([14, 28, 7, 21, 33, 45], 25);
