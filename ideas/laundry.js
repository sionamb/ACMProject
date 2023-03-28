


// Get minute space. 
const minSpace = document.querySelector('div#container main.main div#maintimer span.minute');

// Get second space. 
const secSpace = document.querySelector('div#container main.main div#maintimer span.second');

// Get millisecond space. 
const msecSpace = document.querySelector('div#container main.main div#maintimer span.millisecond');


/*****/


// Initialize time count. 
let timecount = 0;
let timer;


// Start timer. 
// startTimer();


/*****/


// Start timer. 
function startTimer() {

	// 
	if(!timer) timer = setInterval(tickMilliSec,1);
}

// Pause timer. 
function pauseTimer() {

	// 
	clearInterval(timer);
	timer = null;
}

// Reset timer. 
function resetTimer() {

	// Reset time count. 
	timecount = 0;

	// Show time count. 
	showTimeCount();
}

// Count to the next millisecond. 
function tickMilliSec() {

	// Increment time count. 
	timecount++;

	// Show time count. 
	showTimeCount();
}

// Show time count. 
function showTimeCount() {
	console.log('Time count:',timecount);

	// Separate time components. 
	// let hr = Math.floor( (timecount/1000) /60);
	let min = Math.floor( (timecount/1000) / 60);
	let sec = Math.floor( (timecount/1000) % 60 );
	let msec = timecount % 1000;

	// Show time components. 
	minSpace.innerHTML = zeroPadNum2(min);
	secSpace.innerHTML = zeroPadNum2(sec);
	msecSpace.innerHTML = zeroPadNum3(msec);

	// Pad number with zeroes. 
	function zeroPadNum2(n) {
		if(n<0) return '00';
		if(n<10) return `0${n}`;
		return n;
	}

	// Pad number with zeroes. 
	function zeroPadNum3(n) {
		if(n<0) return '000';
		if(n<10) return `00${n}`;
		if(n<100) return `0${n}`;
		return n;
	}
}
