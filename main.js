
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
// 	window.onload = function() {
// 		if (!location.hash) {
// 			location = location + "#reloaded";
// 			location.reload(forceGet);
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

var num = 0;

function incrementNum() {
	console.log(num);
	num++;
	if (num > 15) {
		clearInterval(int)
	}
};

var int = setInterval(incrementNum, 1000);

// TASK 5

// TASK 6

// TASK 7
