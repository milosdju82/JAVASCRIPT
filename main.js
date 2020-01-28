
// TASK 1

var person = {
	name: "Mike",
	age: 28,
	married: true
};

function changePersonData(personX) {
	personX.age = 34;
	delete personX.married;

	console.log(person);
};

changePersonData(person);




// TASK 2

var persona = {
	name: "Jack",
	age: 32,
	married: true
};



function checkPersonProperty(parentPerson) {

	if(!parentPerson.hasOwnProperty("children")) {
		parentPerson.children = [
		{name: "Jack jr.", age: 6, gender: "Male"},
		{name: "Susan", age: 3, gender: "Female"}
		];

	} console.log(persona);
};

checkPersonProperty(persona);




// TASK 3

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function pasedOrNot(studentX) {

	for (var i = 0; i < studentX.length; i++) {
		var student = studentX[i];

		if (student.passed) {
			console.log(student.name + " passed exam. :)");
		} else {
			console.log(student.name + " did't passed exam. :(");
		}
	}
}

pasedOrNot(students);




// TASK 4

function repackData(students) {

	var names = [];
	var ages = [];
	var passed = [];

	for (var i = 0; i < students.length; i++) {
		var student = students[i];
		names[i] = student.name;
		ages[i] = student.age;
		passed[i] = student.passed;
	} 
	console.log(names, ages, passed);
}

repackData(students);
