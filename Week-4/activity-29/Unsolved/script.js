var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;


// create init function
//get minute value
//convert minute value to seconds
//store in global totalSeconds
//clear intervals

function init()
{
  totalSeconds = workMinutesInput.value * 60;
  secondsElapsed = 0;
  converTimeLeft(totalSeconds);
  console.log(totalSeconds);
  clearInterval(interval);
  

}


  function converTimeLeft(seconds)
  {
    var minutes = Math.floor(seconds/60);
    var sec = seconds % 60;
    if (minutes < 10) 
    {
      minutes = "0"+minutes
    }
    if (sec < 10) 
    {
      sec = "0"+sec
    }
    minutesDisplay.textContent = minutes
    secondsDisplay.textContent = sec
  }

function startTimer() 
{
  interval = setInterval(function()
    {
      if (secondsElapsed <= totalSeconds){
      secondsElapsed++;
      var secondsLeft =totalSeconds - secondsElapsed;
      converTimeLeft(secondsLeft)
    }
    else 
    {
      clearInterval(interval);
      alert('Time to take a break');
    } 
  }, 1000)
};

function pauseTimer()
{
  clearInterval(interval);
}

function resetTimer()
{
  init()
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", resetTimer);

init()