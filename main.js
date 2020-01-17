

// TASK 6

function lowestNumber(arr) {

	var lowest = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < lowest) {
			lowest = arr[i];
		}
	}
	return lowest;
}


function highestNumber(arr) {

	var highest = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > highest) {
			highest = arr[i];
		}
	}
	return highest;
}


function multiply(lowestNumber, highestNumber) {

	var arr = [10, 15, 5, 44, 30, 26, 8];

	var lowest = lowestNumber(arr);
	var highest = highestNumber(arr);

	var result = lowest * highest;

	console.log(result);
}


multiply(lowestNumber, highestNumber);




// TASK 7

function uniqueNumbers(list) {
	var uniqueArr = [];

	found = false;
	for (var i = 0; i < list.length; i++) {
		for (var j = 0; j < list.length; j++) {
			if (i === j) {
				continue;
			} else {
				if (list[i] == list[j]) {
					found = true;
					break;
				}
			}
		} if (!found) {
			uniqueArr[uniqueArr.length] = list[i];
		}
		found = false;
	}
	return uniqueArr;
}


function deleteBiggest(list) {
	var withoutBiggest = [];
	var biggestNumber = highestNumber(list);

	for (i = 0; i < list.length; i++) {
		if (list[i] === biggestNumber) {
			continue;
		} else {
			withoutBiggest[withoutBiggest.length] = list[i];
		}
	}
	return withoutBiggest;
}


function finalFunction(list, deleteBiggest) {
	var uniqeList = uniqueNumbers(list);
	var finalList = deleteBiggest(uniqeList);

	console.log(finalList);
}



finalFunction([15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64], deleteBiggest);

