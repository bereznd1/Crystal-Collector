$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var currentPoints = 0;
    var goalNumber = Math.floor(Math.random() * 120) + 19;
   // var crystalNumber = Math.floor(Math.random() * 12) + 1;

    function loadRandomNumbers (goalNumber) {

        //put random goal number into the page
    $("#random-number").text(goalNumber);

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

    loadRandomNumbers(goalNumber);


   // for (var i = 0; i < letters.length; i++) {


  //  }

    $(".crystals").on("click", function () {
        
        var crystalValue = $(this).attr("value");
        crystalValue = parseInt(crystalValue);
        currentPoints += crystalValue;
        $("#total-score").html(currentPoints);

    });

});