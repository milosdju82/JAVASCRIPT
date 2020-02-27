
//players
var players = [
	{
		img: "1 Bruno Varela.png",
		name: "Bruno",
		lastName: "Varela",
		number: 1,
		position: "Goalkeeper",
		age: 27
	},
	{
		img: "2 Perr Schuurs.png",
		name: "Perr",
		lastName: "Schuurs",
		number: 2,
		position: "Defender",
		age: 29
	},
	{
		img: "3 Joel Veltman.png",
		name: "Joel",
		lastName: "Veltman",
		number: 3,
		position: "Defender",
		age: 22
	},
	{
		img: "4 Edson Alvarez.png",
		name: "Edson",
		lastName: "Alvarez",
		number: 4,
		position: "Defender",
		age: 29
	},
	{
		img: "5 Kik Pierie.png",
		name: "Kik",
		lastName: "Pierie",
		number: 5,
		position: "Defender",
		age: 28
	},
	{
		img: "17 Daley Blind.png",
		name: "Daley",
		lastName: "Blind",
		number: 17,
		position: "Defender",
		age: 26
	},
	{
		img: "6 Donny van de Beek.png",
		name: "Donny",
		lastName: "van de Beek",
		number: 6,
		position: "Midfielder",
		age: 24
	},
	{
		img: "8 Carel Eiting.png",
		name: "Carel",
		lastName: "Eiting",
		number: 8,
		position: "Midfielder",
		age: 27
	},
	{
		img: "19 Zakaria Labyad.png",
		name: "Zakaria",
		lastName: "Labyad",
		number: 19,
		position: "Midfielder",
		age: 31
	},
	{
		img: "22 Hakim Ziyech.png",
		name: "Hakim",
		lastName: "Ziyech",
		number: 22,
		position: "Midfielder",
		age: 26
	},
	{
		img: "9 Klaas Jan Huntelaar.png",
		name: "Klaas",
		lastName: "Jan Huntelaar",
		number: 9,
		position: "Attack",
		age: 35
	},
	{
		img: "10 Dusan Tadic.png",
		name: "Dusan",
		lastName: "Tadic",
		number: 10,
		position: "Attack",
		age: 27
	},
	{
		img: "11 Quincy Promes.png",
		name: "Quincy",
		lastName: "Promes",
		number: 11,
		position: "Attack",
		age: 22
	},
	{
		img: "23 Lassina Traore.png",
		name: "Lassina",
		lastName: "Traore",
		number: 23,
		position: "Attack",
		age: 24
	},
	{
		img: "24 Andre Onana.png",
		name: "Andre",
		lastName: "Onana",
		number: 24,
		position: "Goalkeeper",
		age: 23
	}
];


// Navbar logo
var logo = document.createElement("img");
logo.src = "img/logo.png";
var addLogo = document.querySelector("a").appendChild(logo);


// h1 main section
var title = document.createElement('h1');
title.textContent = "Ajax Football Club";
var addTitle = document.querySelector('section').before(title);


//  Main Section 
function getRandomNumber(arr) {
	return Math.floor(Math.random() * arr.length); // Zaokruzuje nadole (do 14)
};


function addPlayers() {

	while (players.length) {

		var firstSquad = document.querySelector('.first-team'); // Select first list
		var substitutions = document.querySelector('.substitutions'); // Select second list
		var randomNumber = getRandomNumber(players);
		var container = players.length > 4 ? firstSquad : substitutions;

		// Add player to the Page
		container.appendChild(createPlayer(players[randomNumber]));

		// Remove player from players
		players.splice(randomNumber, 1);
	}
};


function createPlayer(playerData) {
	
	var player = document.createElement('div');
	player.classList.add('player');

	// One elemnt of img
	var img = '<img src="img/' + playerData.img + '" alt="" />';
	var name = '<div>' + playerData.name + " " + playerData.lastName + '</div>';
	var num = '<div>' + playerData.number + '</div>';
	var position = '<div>' + playerData.position + '</div>';
	var age = '<div>Age ' + playerData.age + '</div>';

	// Add player to page
	player.innerHTML = num + name + position + age + img;
	return player;
};


function makeSubstitution() {

	var firstSquad = document.querySelectorAll('.first-team .player');
	var substitutions = document.querySelectorAll('.substitutions .player');

	var firstSquadNumber = getRandomNumber(firstSquad);
	var substitutionsNumber = getRandomNumber(substitutions);

	var firstSquadPlayer = firstSquad[firstSquadNumber];
	var substitutionPlayer = substitutions[substitutionsNumber];
	
	var subPrevious = substitutionPlayer.previousSibling;
	var subNext = substitutionPlayer.nextSibling;

	firstSquadPlayer.after(substitutionPlayer);

	subPrevious ? subPrevious.after(firstSquadPlayer) : subNext.before(firstSquadPlayer);

};



// Initialize functions
addPlayers();
setInterval(makeSubstitution, 5000);
