$(document).ready(function () {

    //defining global variables
    var wins = 0;
    var losses = 0;
    var currentPoints;
    var goalNumber;


    //this function sets up the game to begin playing
    function initialize() {

        //display the starting score
        currentPoints = 0;
        $("#display-total-score").html(currentPoints);

        //put random goal number into the page
        goalNumber = Math.floor(Math.random() * 100) + 19;
        $("#random-number").html(goalNumber);

        //display the wins & losses
        $("#wins").html(wins);
        $("#losses").html(losses);

        //get all of the crystals and assign them a random value
        var getCrystal1 = $("#crystal1");
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        getCrystal1.attr("value", crystalNumber);

        var getCrystal2 = $("#crystal2");
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        getCrystal2.attr("value", crystalNumber);

        var getCrystal3 = $("#crystal3");
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        getCrystal3.attr("value", crystalNumber);

        var getCrystal4 = $("#crystal4");
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        getCrystal4.attr("value", crystalNumber);

    }     

    //run the initialize function, thus starting off the game
    initialize();

    //when any of the crystal images is clicked, get the value of the specific crystal that was clicked, add it to the current score, & display that score
    $(".crystals").on("click", function () {

        var crystalValue = $(this).attr("value");
        crystalValue = parseInt(crystalValue);
        currentPoints += crystalValue;
        $("#display-total-score").html(currentPoints);


        //if the current score matches the goal number, add a point to wins & restart the game
        if (currentPoints === goalNumber) {
            wins++;
            $("#message").html("<strong>You won!</strong>");
            initialize();
        }

        //if the current score is greater than the goal number, add a point to losses & restart the game
        else if (currentPoints > goalNumber) {
            losses++;
            $("#message").html("<strong>You lost!</strong>");
            initialize();
        }
    });


});