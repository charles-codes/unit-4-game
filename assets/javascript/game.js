// Function to get the game up and running. //
$(document).ready(function(){

// Variable to determine the computer's randomly generated nunber. //
    var cpuRandom = Math.floor(Math.random()*101+19)
        console.log("cpuRandom " + cpuRandom)

// Variables to define and select random numbers that correspond to each of the four buttons. //

    var crystalRedRandom= Math.floor(Math.random()*11+1);
    var crystalBlueRandom= Math.floor(Math.random()*11+1);
    var crystalGreenRandom= Math.floor(Math.random()*11+1);
    var crystalVioletRandom= Math.floor(Math.random()*11+1);

// Variable for player's total score. //
    var totalScore;

// Variable for the wins and losses tally. //
    var wins = 0;
    var losses = 0;

// Game reset function. //
    var reset = function () {
        cpuRandom = Math.floor(Math.random()*101+19);
        $("randomNumber").text(cpuRandom);
        crystalRedRandom= Math.floor(Math.random()*11+1);
        crystalBlueRandom= Math.floor(Math.random()*11+1);
        crystalGreenRandom= Math.floor(Math.random()*11+1);
        crystalVioletRandom= Math.floor(Math.random()*11+1);
        totalScore = 0;
    }

// Functions for clicking on crystal buttons. //
    $("button-red").on("click", function(){
        totalScore + totalScore + crystalRedRandom;
        $("yourScore").text(totalScore)
            if (totalScore === cpuRandom) {
                wins++;
                reset();
            }   
    });

    $("button-blue").on("click", function(){
        totalScore + totalScore + crystalBlueRandom;
        $("yourScore").text(totalScore)
            if (totalScore === cpuRandom) {
                wins++;
                reset();
            }
    });

    $("button-green").on("click", function(){
        totalScore + totalScore + crystalGreenRandom;
        $("yourScore").text(totalScore)
            if (totalScore === cpuRandom) {
                wins++;
                reset();
            }
    });

    $("button-violet").on("click", function(){
        totalScore + totalScore + crystalVioletRandom;
        $("yourScore").text(totalScore)
        if (totalScore === cpuRandom) {
            wins++;
            reset();
        }
    });
});