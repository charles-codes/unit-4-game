// Variables defined for printing text to the webpage. //
var winsText = document.getElementById("winsTally");
var lossesText = document.getElementById("lossesTally");
var cpuRandomText = document.getElementById("randomNumber");
var yourScoreText = document.getElementById("yourScore");

// Variable to determine the computer's randomly generated nunber. //
var cpuRandom = Math.floor(Math.random()(120 - 19 + 1) + 19);
    console.log("cpuRandom " + cpuRandom)

// Variables to define and select random numbers that correspond to each of the four buttons. //

var crstals = Math.floor(Math.random()(12 - 1 + 1) + 1);

var crystalRedRandom;
var crystalBlueRandom;
var crystalGreenRandom;
var crystalVioletRandom;

var totalScore;

// Variable for the wins and losses tally. //
var wins = 0;
var losses = 0;

 var gameStart = function(event) {

    
 }

document.onClick = function(event) {


}
if (totalScore === cpuRandom) {
    wins++;
}

else if (totalScore > cpuRandom) {
    losses++;
}