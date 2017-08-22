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

	