


// Get minute space. 
//const minSpace = document.querySelector('div#container main.main div#maintimer span.minute');

// Get second space. 
//const secSpace = document.querySelector('div#container main.main div#maintimer span.second');

// Get millisecond space. 
const timerElement = document.querySelector('div#container main.main div#maintimer span.millisecond')

let flag = false
let Gminutes = 0
let Gseconds = 0



function startTimer(){
  flag = false

  
  let timeLimit = 0
  let timeInSeconds = 0

  if(Gminutes === 0 && Gseconds === 0)
    {timeLimit = 45;
    timeInSeconds = timeLimit * 60;
  }
  else {
    timeLimit = Gminutes
    timeInSeconds = Gseconds
    
  }
    
    


  // Set the time limit in minutes
  
  // Convert minutes to seconds
  

  // Get the timer element from the HTML
  //var timerElement = document.getElementById('timer');
  
  // Update the timer every second
  var countdown = setInterval(function() {
    if(!flag){
      // Calculate minutes and seconds
      var minutes = Math.floor(timeInSeconds / 60);
      Gminutes = minutes
      console.log(minutes)
      var seconds = timeInSeconds - (minutes * 60);
      Gseconds = seconds

      // Display the time in minutes and seconds
      timerElement.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

      // Decrement time by one second
      timeInSeconds--;

      // Check if time has run out
      if (timeInSeconds < 0) {
        clearInterval(countdown);
        timerElement.innerHTML = "Time's up!";
      }
    }

  }, 1000);
}



function pauseTimer(){
  console.log("pause")
  flag = true
  // startTimer()
}
