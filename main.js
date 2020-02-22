
// TASK 1

// function browserStatus() {
// 	if (navigator.onLine) {
// 		alert("Browser is online")
// 	} else {
// 		console.log("Browser is offline")
// 	}
// };

// browserStatus();



// TASK 2

// function reloadPage() {
// 	window.onload = function() {
// 		if (!location.hash) {
// 			location = location + "#reloaded";
// 			location.reload();
// 		} else if (location.hash = "reloaded") {
// 			alert("Page has been reloaded")
// 		}
// 	}
// };

// reloadPage();



// TASK 3

// function redirect() {

// 	if (location.href = "https://www.google.com/") {
// 		location.href = window.history.back(1)
// 	} else {
// 		location.href = "https://www.google.com/"
// 	}
// };

// var goTo = setTimeout(redirect, 3000)



// TASK 4

// var num = 0;

// function incrementNum() {
// 	console.log(num);
// 	num++;
// 	if (num > 15) {
// 		clearInterval(int)
// 	}
// };

// var int = setInterval(incrementNum, 100);



// TASK 5

// function randomNumber() {

// 	var result = Math.round(Math.random() * 10);
// 	return result;
// }

// var call = randomNumber();



// TASK 6

// var users = [
// {
// 	name: "Marko",
// 	age: 26,
// 	status: "inactive"
// },
// {
// 	name: "Vlada",
// 	age: 31,
// 	status: "inactive"
// },
// {
// 	name: "Milos",
// 	age: 37,
// 	status: "inactive"
// },
// {
// 	name: "Nikola",
// 	age: 27,
// 	status: "inactive"
// },
// {
// 	name: "Ana",
// 	age: 34,
// 	status: "inactive"
// }
// ];


// var userName = prompt("Please enter your name");
// var loggedInUser;
// var index;

// function logIn() {

// 	if (users.some(function(user, i) {
// 		index = i;
// 		return user.name === userName;
// 	})) 
// 	{	
// 		loggedInUser = users[index];
// 		loggedInUser.status = "active";
// 		localStorage.setItem("loggedInUser", loggedInUser.name);
// 		console.log(loggedInUser.name + " is logged in.");

// 		setTimeout(function() {
// 			loggedInUser.status = "inactive";
// 			localStorage.removeItem("loggedInUser");
// 			console.log(loggedInUser.name + " has logged out.");
// 		}, 120000);
// 	} else {
// 		console.log("User with name " + userName + " does not exist!");
// 	}
// };

// logIn();


// TASK STRINGS

// var array = ["Peter", "Jo", "Steaven", "Jack", "Jim"];

