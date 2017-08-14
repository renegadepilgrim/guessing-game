var message="";
var score = 0;

function askQuestion(question, answer, correctMessage, wrongMessage, location){
  var response = prompt(question);
  if(response.toLowerCase()==answer.toLowerCase()){
    message = "<img src=img/check-mark-8-128.jpg>"+correctMessage;
    score += 1;
  } else {
    message = "<img src=img/x-mark-128.jpg>"+wrongMessage;
  }
  document.getElementById(location).innerHTML = message;
}

function guessingGame(){
  askQuestion("Do I like to travel?", "yes", "Absolutely!  I love to travel.", "You don't know me!", 'answerOne');
  askQuestion("Do I like coffee?", "yes", "You know me so well!", "Wrong! Coffee is sacred in Portland!", 'answerTwo');
  askQuestion("Have I ridden my 1980 Vespa P200 across the US?", "yes", "Yes, I did. In 2006.  Over 10 days.", "Wrong Answer! I am an OG Cannonballer.", 'answerThree');
  askQuestion("Did a website I create go viral recently?", "yes", "Yes, it was a dating website I created for myself.", "That would be no.  I'm a celebrity!", 'answerFour');
  askQuestion("Do I like to hike and backpack?", "yes", "Yes, I like to hike and backpack in Glacier National Park!", "I don't think you know me at all.  Nature is life.", 'answerFive');
  myAge();
  myScore();
}

//question six
function myAge(){
  for (var i=0; i<1; i++){
    var ageStatus = 43;
    var guessAge = prompt("What is your best guess at my age?");
    if(guessAge == ageStatus){
      message ="You guessed my exact age!  Congrats!";
      score += 1;
    } else if (guessAge > ageStatus){
      message ="Too old!";
    } else if (guessAge < ageStatus){
      message ="Too young!";
    }
    document.getElementById('answerSix').innerHTML = message;
  }
}

function myScore(){
  if (score === 6){
    message ="Your score is " + score +".  You answered every question correctly.";
  } else {
    message ="Your score is "+ score +".  You did not answer all the questions correctly.";
  }
  document.getElementById('scoreAnswer').innerHTML = message;
}
