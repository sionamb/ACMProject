// Set the time limit in minutes
var timeLimit = 45;

// Convert minutes to seconds
var timeInSeconds = timeLimit * 60;

// Update the timer every second
var countdown = setInterval(function() {
  // Calculate minutes and seconds
  var minutes = Math.floor(timeInSeconds / 60);
  var seconds = timeInSeconds - (minutes * 60);

  // Display the time in minutes and seconds
  console.log(minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

  // Decrement time by one second
  timeInSeconds--;

  // Check if time has run out
  if (timeInSeconds < 0) {
    clearInterval(countdown);
    console.log("Time's up!");
  }
}, 1000);
