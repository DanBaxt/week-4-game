$(document).ready(function(){
    var crystalOne, crystalTwo, crystalThree, crystalFour;
    var wins = 0;
    var losses = 0;
    var randomComputerNumber;
    var userScoreTally;

    function initializeVariables() {
        randomComputerNumber = 19 + Math.floor(Math.random() * 102);
        crystalOne = 1 + Math.floor(Math.random() * 12);
        crystalTwo = 1 + Math.floor(Math.random() * 12);
        crystalThree = 1 + Math.floor(Math.random() * 12);
        crystalFour = 1 + Math.floor(Math.random() * 12);
        

        userScoreTally = 0;

        $("#numberWins").html("Wins: " + wins);
        $("#numberLosses").html("Losses: " + losses);
        $("#randomNumber").html(randomComputerNumber);
        $("#yourScore").html(userScoreTally);
  
    }
    initializeVariables();

    $(".crystal").on("click", function() {

        var pressed = $(this).attr("value");
       
console.log(pressed);
if (pressed =="one") {
    userScoreTally += crystalOne;
    console.log(userScoreTally);
    if (userScoreTally < randomComputerNumber) {
        $("#yourScore").html(userScoreTally);
    } else if (userScoreTally === randomComputerNumber) {
        $("#userImage").html("<img src = 'assets/images/victory.jpg' height = 400px width = 300px/>");
        wins++;
        $("#numberWins").html("Wins: " + wins);
        alert("You Win!");
        initializeVariables();
    } else if (userScoreTally > randomComputerNumber) {
        $("#userImage").html("<img src = 'assets/images/lose.png' height = 300px width = 300px/>");
        losses++;
        $("#numberLosses").html("Losses: " + losses);
        alert("You Lose");
        initializeVariables();
    }
} else if (pressed == "two") {
    userScoreTally += crystalTwo;
    console.log(userScoreTally);
    if (userScoreTally < randomComputerNumber) {
        $("#yourScore").html(userScoreTally);
    } else if (userScoreTally === randomComputerNumber) {
        $("#userImage").html("<img src = 'assets/images/victory.jpg' height = 400px width = 300px/>");
        wins++;
        $("#numberWins").html("Wins: " + wins);
        alert("You Win!");
        initializeVariables();
    } else if (userScoreTally > randomComputerNumber) {
        $("#userImage").html("<img src = 'assets/images/lose.png' height = 300px width = 300px/>");
        losses++;
        $("#numberLosses").html("Losses: " + losses);
        alert("You Lose");
        initializeVariables();
    }
} else if (pressed == "three") {
    userScoreTally += crystalThree;
    console.log(userScoreTally);
    if (userScoreTally < randomComputerNumber) {
        $("#yourScore").html(userScoreTally);
    } else if (userScoreTally === randomComputerNumber) {
        $("#userImage").html("<img src = 'assets/images/victory.jpg' height = 300px width = 300px/>");
        wins++;
        $("#numberWins").html("Wins: " + wins);
        alert("You Win!");
        initializeVariables();
    } else if (userScoreTally > randomComputerNumber) {
        $("#userImage").html("<img src = 'assets/images/lose.png' height = 300px width = 300px/>");
        losses++;
        $("#numberLosses").html("Losses: " + losses);
        alert("You Lose");
        initializeVariables();
    }
} else if (pressed == "four") {
    userScoreTally += crystalFour;
    console.log(userScoreTally);
    if (userScoreTally < randomComputerNumber) {
        $("#yourScore").html(userScoreTally);
    } else if (userScoreTally === randomComputerNumber) {
        $("#userImage").html("<img src = 'assets/images/victory.jpg' height = 400px width = 300px/>");
        wins++;
        $("#numberWins").html("Wins: " + wins);
        alert("You Win!");
        initializeVariables();
    } else if (userScoreTally > randomComputerNumber) {
        $("#userImage").html("<img src = 'assets/images/lose.png' height = 300px width = 300px/>");
        losses++;
        $("#numberLosses").html("Losses: " + losses);
        alert("You Lose");
        initializeVariables();
    }
} else {
    console.log("error");
}



    }); 

	
});


