let timeLeftDisplay = document.getElementById('time-left-display');
let startButton = document.getElementById("start-button");
let motivationalQuoteHeader = document.getElementById("motivational");
let refreshButton = document.getElementById("refresh-button");
let minHeader = document.getElementById("mins");
let secHeader = document.getElementById("secs");
let htmlTitle = document.getElementById('title');



startButton.addEventListener('click', countdown);
refreshButton.addEventListener('click', ()=> {
	location.reload();
});


function countdown() {
	
	let inputval = document.getElementById('timeset').value;
	let startTimer = new Date().getTime();
	var countDownDate = new Date(startTimer + inputval * 60000).getTime();

	hideElements();

	let timer = setInterval(function() {

		let now = new Date().getTime();
		let timeleft = countDownDate - now;

		// Calculating the days, hours, minutes and seconds left
		var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

	    minHeader.innerHTML = minutes + "m ";
	    secHeader.innerHTML = seconds + "s ";
	    htmlTitle.innerHTML = `Babe's Timer ${minutes}:${seconds}`;
	    // Display the message when countdown is over
	    if (timeleft < 0) {
	        clearInterval(timer);
	        playNotification();
	        htmlTitle.innerHTML = "Babe's Timer Done!";
	        minHeader.style.display = 'none';
	        secHeader.style.display = 'none';
	        refreshButton.style.display = 'inline-block';
	        document.getElementById("end").innerHTML = getRandomQuote();
	    }
	}, 1000);	
}


function hideElements() {
	startButton.style.display = 'none';
	document.getElementById('input-div').style.display = 'none';
}


function getRandomQuote() {

	let motivationalQuotes = [
		"Kick ass, Babe!",
		"All you have to be is yourself.",
		"That was nothing. You got this!",
		"Crack open a cold one. Celebrate",
		"IFUKINLUVU!"
	];

	numberOfQuotes = motivationalQuotes.length;
	randomNumber = Math.floor(Math.random() * numberOfQuotes);
	return motivationalQuotes[randomNumber];
}


function playNotification() {
	let audiofile = new Audio('notification.m4a');
	audiofile.play();
}




// Todo:
/*
	Cleanup
*/









