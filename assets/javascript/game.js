$(document).ready(function() {

	var randomNumber = Math.floor(Math.random() * 120) + 19;
	var crystalValue1 = Math.floor(Math.random() * 12) + 1;
	var crystalValue2 = Math.floor(Math.random() * 12) + 1;
	var crystalValue3 = Math.floor(Math.random() * 12) + 1;
	var crystalValue4 = Math.floor(Math.random() * 12) + 1;
	var totalCrystalValue = crystalValue1 + crystalValue2 + crystalValue3 + crystalValue4
	var wins = 0
	var losses = 0

	for ( i = 19; i < 120; i++); {
		console.log("check");
		console.log(randomNumber);
		$("#randomNumber").html(randomNumber);
	}

	console.log(crystalValue1);
	console.log(crystalValue2);
	console.log(crystalValue3);
	console.log(crystalValue4);
	console.log(totalCrystalValue);

	$("#btn1").click(function() {
		console.log("check");
		$("#totalCrystalValue").html(totalCrystalValue);
	});

	$("#btn2").click(function() {
		console.log("check");
		$("#totalCrystalValue").html(totalCrystalValue);
	});

	$("#btn3").click(function() {
		console.log("check");
		$("#totalCrystalValue").html(totalCrystalValue);
	});

	$("#btn4").click(function() {
		console.log("check");
		$("#totalCrystalValue").html(totalCrystalValue);
	});


});

	// The player will be shown a random number at the start of the game.

	// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

	// Your game will hide this amount until the player clicks a crystal.

	// When they do click one, update the player's score counter.
	
	// The player wins if their total score matches the random number from the beginning of the game.

	// The player loses if their score goes above the random number.

	// The game restarts whenever the player wins or loses.

	// When the game begins again, the player should see a new random number. 
	//Also, all the crystals will have four new hidden values. 
	//Of course, the user's score (and score counter) will reset to zero.

	//The app should show the number of games the player wins and loses. 
	//To that end, do not refresh the page as a means to restart the game.