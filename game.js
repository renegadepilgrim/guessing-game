var message="";
var score = 0;

function guessingGame(){
myTravel();
myBeverage();
myVehicle();
myAge();
myWebsite();
myHobby();
myScore();
}

function updatePage(elementId) {
  document.getElementById(elementId).innerHTML = message;
}

  function myTravel(){
    var travelStatus = prompt("Do I like to travel?");
    if(travelStatus == "yes" || travelStatus == "Yes"|| travelStatus == "YES"){
      message = "Absolutely!  I love to travel.";
      score += 1;
    } else {
      message = "You don't know me!";
    }
    updatePage('answerOne');
  }

  function myBeverage(){
    var beverageStatus = prompt("Do I like coffee?");
    if(beverageStatus == "yes" || beverageStatus == "Yes"){
      message = "You know me so well!";
      score += 1;
    } else {
      message = "Wrong!  Coffee is sacred in Portland!";
    }
    updatePage('answerTwo');
  }

  function myVehicle(){
    var vehicleStatus = prompt("Have I ridden my 1980 Vespa P200 across the US?");
    if(vehicleStatus == "yes" || vehicleStatus == "Yes"){
      message = "Yes, I did. In 2006.  Over 10 days.";
      score += 1;
    } else {
      message = "Wrong Answer! I am an OG Cannonballer.";
    }
    updatePage('answerThree');
  }

  function myWebsite(){
    var websiteStatus = prompt("Did a website I create go viral recently?");
    if (websiteStatus == "yes" || websiteStatus == "Yes"){
      message = "Yes, it was a dating website I created for myself.";
      score += 1;
    } else {
      message ="That would be no.  I'm a celebrity!";
    }
    updatePage('answerFour');
  }

  function myHobby(){
    var hobbyStatus = prompt("Do I like to hike and backpack?");
    if (hobbyStatus == "yes" || hobbyStatus == "Yes"){
      message ="Yes, I like to hike and backpack in Glacier National Park!"
      score += 1;
    } else {
      message ="I don't think you know me at all.  Nature is life.";
    }
    updatePage('answerFive');
  }

  function myAge(){
    for (var i=0; i<1; i++){
      var ageStatus = 43;
      var guessAge = prompt("What is your best guess at my age?");
      if(guessAge == ageStatus){
        message =("You guessed my exact age!  Congrats!");
        score += 1;
      } else if (guessAge > ageStatus){
        message =("Too old!");
      } else if (guessAge < ageStatus){
        message =("Too young!");
      }
      updatePage('answerSix');
    }
  }

  function myScore(){
    if (score === 6){
    message =("Your score is " + score +".  You answered every question correctly.");
    } else {
    message =("Your score is "+ score +".  You did not answer all the questions correctly.");
    }
    updatePage('scoreAnswer');
  }
