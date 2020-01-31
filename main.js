
// TASK 5 previous homework

var person = {
	name: "Jack",
	age: 32,
	married: true
};

var newPerson = Object.create(person);

console.log(newPerson.age);




// TASK 6 previous homework

var persona = {
	name: "Mike",
	age: 28,
	married: true,

	callingData: function() {
		console.log(this.name, this.age);
	}

};

persona.callingData(this);




// TASK 7 previous homework

var personX = {
	addProperties: function(name, age, married) {
		this.name = name;
		this.age = age;
		this.married = married;
		console.log(this);
	}
};

personX.addProperties("Milos", 37, true);




// TASK 1 OF 2

var data = [1, 2, 3]
var a = 0;

for(var i = 0; i < data.length; i++) {
	for(var j = 0; j < data.length; j++) {
		a++;
		console.log("At position " + i, "subposition " + j, "value is " + a);
	}
};

// TASK 2 OF 2

var dataX = {
	arrayOfObjects: [
	{
		name: "Dragche",
		age: 20,
		status: "single"
	},
	{
		name: "Goranche",
		age: 30,
		status: "married"
	},
	{
		name: "Milanche",
		age: 40,
		status: "divorced"
	}
	],
	showData: function(name, age, status) {
		this.name = name;
		this.age = age;
		this.status = status;

		console.log(this);
	}
};

dataX.showData(dataX.arrayOfObjects[0].name, dataX.arrayOfObjects[0].age, dataX.arrayOfObjects[0].status);
dataX.showData(dataX.arrayOfObjects[1].name, dataX.arrayOfObjects[1].age, dataX.arrayOfObjects[1].status);
dataX.showData(dataX.arrayOfObjects[2].name, dataX.arrayOfObjects[2].age, dataX.arrayOfObjects[2].status);




// TASK 1 PRACTICE

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

function repacked(sameObject) {
	var repackedObject = {
		[sameObject.name]: sameObject.name,
		[sameObject.lastName]: sameObject.lastName,
		[sameObject.status]: sameObject.status
	};
	console.log(repackedObject);
};

repacked(someData);




// TASK 2 PRACTICE

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

function oneArray(list) {
	var newArray = [];

	for (var i = 0; i < list.length; i++) {
		if (list[i] > 0) {
			newArray[newArray.length] = list[i];
		}
		for (var j = 0; j < list[i].length; j++) {
			if (list[i].length > 0) {
				newArray[newArray.length] = list[i][j];
			}
		}
	}
	return newArray;
}

var allInOneArray = oneArray(someData);
console.log(allInOneArray);




// TASK 3 PRACTICE

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];
var subArrays = [];

function getBothSubarrays(list) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].length > 1) {
			subArrays[subArrays.length] = list[i];
		}
	}
	return subArrays;
};

var subArrays = getBothSubarrays(someData);
console.log(subArrays);


function mergeSubarrays(subArrays) {
	var merged = [];

	for (var i = 0; i < subArrays.length; i++) {
		for (var j = 0; j < subArrays[i].length; j++) {
			merged[merged.length] = subArrays[i][j];
		}
	}
	return merged;
}

var finalArray = mergeSubarrays(subArrays);
console.log(finalArray);




// TASK 4 PRACTICE

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

function checkObject(obj) {

	if (obj.hasOwnProperty("name")) {
		return removeName;
	} else {
		return addName;
	}
}

function removeName(obj) {
	delete obj.name;
	console.log("name removed", obj);
}

function addName(obj, name) {
	obj.name = name;
	console.log("name added", obj);
}

var resultRemoveName = checkObject(someData);
resultRemoveName(someData);

var resultAddName = checkObject(someData);
resultAddName(someData, "Joe");




// TASK 5 PRACTICE

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married",
	isThereName: function() {
		var isThereName = this.hasOwnProperty("name");

		if (isThereName) {
			this.secondMethod = function() {
				console.log("second method called");

				this.thirdMethod = function() {
					console.log("third method called");
					addName(this, "Mike");
				};
				removeName(this);
				this.thirdMethod();
			};
			this.secondMethod();
		}
		return isThereName;
	}
};

someData.isThereName();
