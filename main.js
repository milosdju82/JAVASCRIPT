
// TASK 1

function browserStatus() {
	if (navigator.onLine) {
		alert("Browser is online")
	} else {
		console.log("Browser is offline")
	}
};

browserStatus();



// TASK 2

// function reloadPage() {
// 	setTimeout("location.reload();", 2000);
// 	console.log("Page reloads every 2 seconds");
// };

// reloadPage();



// TASK 3

// function redirect() {
// 	setTimeout(function() {
// 		window.location = "https://www.google.com/";
// 	}, 3000);
// // 		setTimeout(function() {
// // 		window.history.back(1);
// // 	}, 3000);
// // };

// redirect();




// TASK 4

// var num = 0;

// function incrementNum() {
// 	console.log(num);
// 	num++;
// 	if (num > 15) {
// 		clearInterval(int)
// 	}
// };

// var int = setInterval(incrementNum, 800);



// TASK 5

// var counter = 0;

// function randomNumber() {

// 	counter++;
// 	var result = Math.round(Math.random() * 10);
// 	console.log(result);

// 	if (counter == 10) {
// 		clearInterval(other);
// 	}
// }

// var other = setInterval(randomNumber, 500);



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
// 		}, 60000);
// 	} else {
// 		console.log("User with name " + userName + " does not exist!");
// 	}
// };

// logIn();
