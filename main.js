
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




// TASK 'SMISLI SVOJ ZADATAK'

// Napraviti callback funkcije. Prva prima niz brojeva i razvrstava ga na dva nova niza,
// parni i neparni. Druga funkcija proverava da li sami nizovi imaju paran ili neparan broj clanova
// i radi sledece:

// - ako oba niza imaju paran br. clanova - pomnozi clanove oba niza sa istim indeksom (prvi sa prvim, drugi sa drugim...)
// - ako oba niza imaju neparan broj clanova - podeli ...
// - ako parni niz ima neparan br. clanova a neparni niz ima paran br. - sabrati i
// - ako parni ima paran br. clanova a neparan neparni br. clanova - oduzeti

// Konzologovati rezultat.

var evenNums = [];
var oddNums = [];
var sumArr = [];

function oddOrEven(arrPrime) {

	for (var i = 0; i < arrPrime.length; i++) {
		if (arrPrime[i] % 2 === 0) {
			evenNums[evenNums.length] = arrPrime[i];
		} else {
			oddNums[oddNums.length] = arrPrime[i];
		}
	} 
	console.log(evenNums, oddNums);
}


function combineArrs(oddOrEven) {
	
	for (var i = 0; i < (evenNums.length && oddNums.length); i++) {

		if ((evenNums.length % 2) == 0 && (oddNums.length % 2) == 0) {
			sumArr[sumArr.length] = evenNums[i] * oddNums[i];

		} else if ((evenNums.length % 2) == 1 && (oddNums.length % 2) == 1) {
			sumArr[sumArr.length] = evenNums[i] / oddNums[i];

		} else if ((evenNums.length % 2) == 1 && (oddNums.length % 2) == 0) {
			sumArr[sumArr.length] = evenNums[i] + oddNums[i];

		} else {
			sumArr[sumArr.length] = evenNums[i] - oddNums[i];
		}
	} 
	return sumArr;
}


function calculateNumbers(arrPrime) {

	var splitArray = oddOrEven(arrPrime);
	var conditionFun = combineArrs(oddOrEven);

	console.log(conditionFun);

}

calculateNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);