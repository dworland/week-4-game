$(document).ready(function() {

	var randomNumber = Math.floor(Math.random() * 120) + 19;
	var crystalValue1 = Math.floor(Math.random() * 12) + 1;
	var crystalValue2 = Math.floor(Math.random() * 12) + 1;
	var crystalValue3 = Math.floor(Math.random() * 12) + 1;
	var crystalValue4 = Math.floor(Math.random() * 12) + 1;
	var wins = 0
	var losses = 0
	var score = 0

	for ( i = 19; i < 120; i++); {
		$("#randomNumber").html(randomNumber);
	}

	$("#wins").html("Wins: " + wins);
	$("#losses").html("Losses: " + losses);
	$("#totalCrystalValue").html(score);

	function reset() {
		score = 0;
		randomNumber = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").html(randomNumber);
		crystalValue1 = Math.floor(Math.random() * 12) + 1;
		crystalValue2 = Math.floor(Math.random() * 12) + 1;
		crystalValue3 = Math.floor(Math.random() * 12) + 1;
		crystalValue4 = Math.floor(Math.random() * 12) + 1;
		$("#totalCrystalValue").html(score);
	};


	$("#btn1").click(function() {
		score = score + crystalValue1
		$("#totalCrystalValue").html(score);
			if (score === randomNumber) {
				wins = wins + 1;
				reset();
			}

			if (score > randomNumber) {
				losses = losses + 1;
				reset();
			}
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
	});

	$("#btn2").click(function() {
		score = score + crystalValue2
		$("#totalCrystalValue").html(score);
			if (score === randomNumber) {
				wins = wins + 1;
				reset();
			}

			if (score > randomNumber) {
				losses = losses + 1;
				reset();
			}
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
	});

	$("#btn3").click(function() {
		score = score + crystalValue3
		$("#totalCrystalValue").html(score);
			if (score === randomNumber) {
				wins = wins + 1;
				reset();
			}

			if (score > randomNumber) {
				losses = losses + 1;
				reset();
			}
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
	});

	$("#btn4").click(function() {
		score = score + crystalValue4
		$("#totalCrystalValue").html(score);
			if (score === randomNumber) {
				wins = wins + 1;
				reset();
			}

			if (score > randomNumber) {
				losses = losses + 1;
				reset();
			}
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
	});


});

	
	// The player wins if their total score matches the random number from the beginning of the game.

	// The player loses if their score goes above the random number.

	// The game restarts whenever the player wins or loses.

	// When the game begins again, the player should see a new random number. 
	//Also, all the crystals will have four new hidden values. 
	//Of course, the user's score (and score counter) will reset to zero.

	//The app should show the number of games the player wins and loses. 
	//To that end, do not refresh the page as a means to restart the game.