function guessingGame(){

  function userName(){
    var name = prompt("Greetings, salutations and welcome! What is your name?");
    return name;
  }


var travelStatus;
var beverageStatus;
var vehicleStatus;
var myAge;
var score = 0;

  function myTravel(){
    var travelStatus = prompt("Do I like to travel?");
    if(travelStatus.lowerCase == "yes" || travelStatus == "Yes"){
      return("Absolutely!  I love to travel.");
      score += 1;
    } else {
      return("You don't know me!");
    }
  }

  function myBeverage(){
    var beverageStatus = prompt("Do I like coffee?");
    if(beverageStatus.lowerCase == "yes" || beverageStatus == "Yes"){
      return("You know me so well!");
      score += 1;
    } else {
      return("Wrong!  Coffee is sacred in Portland!");
    }
  }

  function myVehicle(){
    var vehicleStatus = prompt("Have I ridden my 1980 Vespa P200 across the US?");
    if(vehicleStatus.lowerCase == "yes" || vehicleStatus == "Yes"){
      return("Yes, I did. In 2006.  Over 10 days.");
      score += 1;
    } else {
      return("Wrong Answer! I am an OG Cannonballer.");
    }
  }

if (score ===3){
  alert ("Your score is ' + score +'.  You answered every question correctly.");
} else {
  alert ("Your score is '+ score +'.  You did not answer all the questions correctly.");
}

for (var i=0; i<=3; i++){
  var myAge = 43;
  var guessAge = prompt("What is your best guess at my age?");
  if(guessAge == myAge){
    alert("You guessed my exact age!  Congrats!");
  } else if (guessAge > myAge){
    alert ("Too old!");
  } else if (guessAge < myAge){
    alert ("Too young!");
  }
}
//}
