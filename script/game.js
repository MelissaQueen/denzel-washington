var answer1 = ["Man-on-fire", "2-guns"];
var answer2 = "1954";
var answer3 = "Dec";
var answer4 = "The-Equalizer";
var answer5 = "The-Equalizer";

function calculateScore() {
	var finalScore = 0;
	var checkedBoxes = document.querySelectorAll('input[name = answer-question1]:checked');
	var checkBoxesLength = checkedBoxes.length;

	var user = document.getElementById("user").value;
	var question2 = document.querySelector('input[name = "radAnswer-question2"]:checked').value;
	var question3 = document.querySelector('input[name = "radAnswer-question3"]:checked').value;
	var question4 = document.querySelector('input[name = "radAnswer-question4"]:checked').value;
	var select = document.getElementById("soundtrackSelect");
	var question5 = select.options[select.selectedIndex].value;

	if (checkBoxesLength == 2 && answer1.indexOf(checkedBoxes[0].value) >= 0 && answer1.indexOf(checkedBoxes[1].value) >= 0) {
		finalScore++;
	}

	if (question2 == answer2) {
		finalScore++;
	}

	if (question3 == answer3) {
		finalScore++;
	}

	if (question4 == answer4) {
		finalScore++;
	}

	if (question5 == answer5) {
		finalScore++;
	}

	alert("Hi " + user + " your final score is " + finalScore + "/5");
}