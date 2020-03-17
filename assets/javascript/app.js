$(document).ready(function () {

    console.log("hello")

    $("#questionsAndTimer").hide();

    $("#resultsPage").hide();

    

    $("#start").on("click", function () {
    
        $("#questionsAndTimer").show()

        clearInterval(countdownInterval)

        countdownInterval = setInterval(decrement, 1000);

        $("#start").hide();

     


    });

       
    function decrement() {

    
        number--;
  
      
    $("#Timer").text("Time Remaining: " + number);

     
      
      
       if (number === 0) {

         endOfTime()

       };

    

    };
  
    $("#finished").on("click", endOfTime)
       
    function endOfTime() {
          
        
        stop();
  
         
          alert("Time's up baby!");

          console.log(correctAnswers[0])
          console.log(playerGuesses[0])
          console.log(correctAnswers[1])
          console.log(playerGuesses[1])

            if (playerGuesses[0] === correctAnswers[0]) {

            correctGuesses += 1;
            
            } else if (playerGuesses[0] == "Billy") {
    
                unanswered += 1;
    
            } else {
                wrongAnsweres += 1;
            }
    
            
            if (playerGuesses[1] === correctAnswers[1]) {
    
                correctGuesses += 1;
            
            } else if(playerGuesses[1] == "Billy") {
        
                    unanswered += 1;
        
            } else {
                    wrongAnsweres += 1;
            }

            if (playerGuesses[2] === correctAnswers[2]) {

                correctGuesses += 1;
                
            } else if (playerGuesses[2] == "Billy") {
        
                    unanswered += 1;
        
            } else {
                    wrongAnsweres += 1;
            }

            if (playerGuesses[3] === correctAnswers[3]) {

                    correctGuesses += 1;
                    
            } else if (playerGuesses[3] == "Billy") {
            
                        unanswered += 1;
            
            } else {
                        wrongAnsweres += 1;
            }

            if (playerGuesses[4] === correctAnswers[4]) {

                correctGuesses += 1;
                
            } else if (playerGuesses[4] == "Billy") {
        
                    unanswered += 1;
        
            } else {
                    wrongAnsweres += 1;
            }


            if (playerGuesses[5] === correctAnswers[5]) {

                correctGuesses += 1;
                
                } else if (playerGuesses[5] == "Billy") {
        
                    unanswered += 1;
        
                } else {
                    wrongAnsweres += 1;
                }

            if (playerGuesses[6] === correctAnswers[6]) {

                    correctGuesses += 1;
                    
                } else if (playerGuesses[6] == "Billy") {
            
                        unanswered += 1;
            
                } else {
                        wrongAnsweres += 1;
                    }


            if (playerGuesses[7] === correctAnswers[7]) {

                correctGuesses += 1;
                        
                } else if (playerGuesses[7] == "Billy") {
                
                    unanswered += 1;
                
                } else {
                   wrongAnsweres += 1;
                }


        if (playerGuesses[8] === correctAnswers[8]) {

               correctGuesses += 1;
                    
            } else if (playerGuesses[8] == "Billy") {
            
                  unanswered += 1;
            
            } else {
                wrongAnsweres += 1;
            }


        if (playerGuesses[9] === correctAnswers[9]) {

            correctGuesses += 1;
                
            } else if (playerGuesses[9] == "Billy") {
        
            unanswered += 1;
        
            } else {
                wrongAnsweres += 1;
            }
    
                console.log("Correct Guesses = " + correctGuesses)
                console.log("wrong answers = " + wrongAnsweres)
                console.log("unanswered questions = " + unanswered)

                $("#correctAnswersShown").text("correct guesses =" + correctGuesses)
                $("#incorrectAnswersShown").text("wrong answers =" + wrongAnsweres)
                $("#unansweredQuestionsShown").text("unanswered questions =" + unanswered)

                $("#questionsAndTimer").hide();

                $("#resultsPage").show();
    
    };
      
       
    
    
  
     
    function stop() {
  
        clearInterval(countdownInterval)
      
    };


//question 1
    $("#questionOneAnswer1").on("click", function () {
        playerGuesses[0] = "questionOneAnswer1"
        console.log(playerGuesses)
        $(".question1Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionOneAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionOneAnswer2").on("click", function () {
        playerGuesses[0] = "questionOneAnswer2"
        console.log(playerGuesses)
        $(".question1Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionOneAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionOneAnswer3").on("click", function () {
        playerGuesses[0] = "questionOneAnswer3"
        console.log(playerGuesses)
        $(".question1Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionOneAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionOneAnswer4").on("click", function () {
        playerGuesses[0] = "questionOneAnswer4"
        console.log(playerGuesses)
        $(".question1Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionOneAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

    //question 2

    $("#questionTwoAnswer1").on("click", function () {
        playerGuesses[1] = "questionTwoAnswer1"
        console.log(playerGuesses)
        $(".question2Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionTwoAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionTwoAnswer2").on("click", function () {
        playerGuesses[1] = "questionTwoAnswer2"
        console.log(playerGuesses)
        $(".question2Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionTwoAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionTwoAnswer3").on("click", function () {
        playerGuesses[1] = "questionTwoAnswer3"
        console.log(playerGuesses)
        $(".question2Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionTwoAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionTwoAnswer4").on("click", function () {
        playerGuesses[1] = "questionTwoAnswer4"
        console.log(playerGuesses)
        $(".question2Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionTwoAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

//question 3

    $("#questionThreeAnswer1").on("click", function () {
        playerGuesses[2] = "questionThreeAnswer1"
        console.log(playerGuesses)
        $(".question3Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionThreeAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionThreeAnswer2").on("click", function () {
        playerGuesses[2] = "questionThreeAnswer2"
        console.log(playerGuesses)
        $(".question3Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionThreeAnswer2").css({"background-color": "blue", "font-style": "italic"});
        
    });

    $("#questionThreeAnswer3").on("click", function () {
        playerGuesses[2] = "questionThreeAnswer3"
        console.log(playerGuesses)
        $(".question3Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionThreeAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionThreeAnswer4").on("click", function () {
        playerGuesses[2] = "questionThreeAnswer4"
        console.log(playerGuesses)
        $(".question3Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionThreeAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

    //question 4

    $("#questionFourAnswer1").on("click", function () {
        playerGuesses[3] = "questionFourAnswer1"
        console.log(playerGuesses)
        $(".question4Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionFourAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionFourAnswer2").on("click", function () {
        playerGuesses[3] = "questionFourAnswer2"
        console.log(playerGuesses)
        $(".question4Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionFourAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionFourAnswer3").on("click", function () {
        playerGuesses[3] = "questionFourAnswer3"
        console.log(playerGuesses)
        $(".question4Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionFourAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionFourAnswer4").on("click", function () {
        playerGuesses[3] = "questionFourAnswer4"
        console.log(playerGuesses)
        $(".question4Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionFourAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

    //question 5

    $("#questionFiveAnswer1").on("click", function () {
        playerGuesses[4] = "questionFiveAnswer1"
        console.log(playerGuesses)
        $(".question5Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionFiveAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionFiveAnswer2").on("click", function () {
        playerGuesses[4] = "questionFiveAnswer2"
        console.log(playerGuesses)
        $(".question5Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionFiveAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionFiveAnswer3").on("click", function () {
        playerGuesses[4] = "questionFiveAnswer3"
        console.log(playerGuesses)
        $(".question5Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionFiveAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionFiveAnswer4").on("click", function () {
        playerGuesses[4] = "questionFiveAnswer4"
        console.log(playerGuesses)
        $(".question5Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionFiveAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

    //question 6

    $("#questionSixAnswer1").on("click", function () {
        playerGuesses[5] = "questionSixAnswer1"
        console.log(playerGuesses)
        $(".question6Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionSixAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionSixAnswer2").on("click", function () {
        playerGuesses[5] = "questionSixAnswer2"
        console.log(playerGuesses)
        $(".question6Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionSixAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionSixAnswer3").on("click", function () {
        playerGuesses[5] = "questionSixAnswer3"
        console.log(playerGuesses)
        $(".question6Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionSixAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionSixAnswer4").on("click", function () {
        playerGuesses[5] = "questionSixAnswer4"
        console.log(playerGuesses)
        $(".question6Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionSixAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

    //queston 7

    $("#questionSevenAnswer1").on("click", function () {
        playerGuesses[6] = "questionSevenAnswer1"
        console.log(playerGuesses)
        $(".question7Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionSevenAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionSevenAnswer2").on("click", function () {
        playerGuesses[6] = "questionFiveAnswer2"
        console.log(playerGuesses)
        $(".question7Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionSevenAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionSevenAnswer3").on("click", function () {
        playerGuesses[6] = "questionSevenAnswer3"
        console.log(playerGuesses)
        $(".question7Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionSevenAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionSevenAnswer4").on("click", function () {
        playerGuesses[6] = "questionSevenAnswer4"
        console.log(playerGuesses)
        $(".question7Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionSevenAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

    //question 8
    
    $("#questionEightAnswer1").on("click", function () {
        playerGuesses[7] = "questionEightAnswer1"
        console.log(playerGuesses)
        $(".question8Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionEightAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionEightAnswer2").on("click", function () {
        playerGuesses[7] = "questionEightAnswer2"
        console.log(playerGuesses)
        $(".question8Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionEightAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionEightAnswer3").on("click", function () {
        playerGuesses[7] = "questionEightAnswer3"
        console.log(playerGuesses)
        $(".question8Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionEightAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionEightAnswer4").on("click", function () {
        playerGuesses[7] = "questionEightAnswer4"
        console.log(playerGuesses)
        $(".question8Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionEightAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

//question 9

    $("#questionNineAnswer1").on("click", function () {
        playerGuesses[8] = "questionNineAnswer1"
        console.log(playerGuesses)
        $(".question9Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionNineAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionNineAnswer2").on("click", function () {
        playerGuesses[8] = "questionNineAnswer2"
        console.log(playerGuesses)
        $(".question9Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionNineAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionNineAnswer3").on("click", function () {
        playerGuesses[8] = "questionNineAnswer3"
        console.log(playerGuesses)
        $(".question9Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionNineAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionNineAnswer4").on("click", function () {
        playerGuesses[8] = "questionNineAnswer4"
        console.log(playerGuesses)
        $(".question9Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionNineAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

    //question 10


    $("#questionTenAnswer1").on("click", function () {
        playerGuesses[9] = "questionTenAnswer1"
        console.log(playerGuesses)
        $(".question10Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionTenAnswer1").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionTenAnswer2").on("click", function () {
        playerGuesses[9] = "questionTenAnswer2"
        console.log(playerGuesses)
        $(".question10Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionTenAnswer2").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionTenAnswer3").on("click", function () {
        playerGuesses[9] = "questionTenAnswer3"
        console.log(playerGuesses)
        $(".question10Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionTenAnswer3").css({"background-color": "blue", "font-style": "italic"});
    });

    $("#questionTenAnswer4").on("click", function () {
        playerGuesses[9] = "questionTenAnswer4"
        console.log(playerGuesses)
        $(".question10Answers").css({"background-color": "red", "font-style": "oblique;"});
        $("#questionTenAnswer4").css({"background-color": "blue", "font-style": "italic"});
    });

 



});



var playerGuesses = ["Billy", "Billy", "Billy", "Billy", "Billy", "Billy", "Billy", "Billy", "Billy", "Billy"];

var number = 80;

var countdownInterval;

var correctGuesses = 0;

var unanswered = 0;

var wrongAnsweres = 0;



var correctAnswers = ["questionOneAnswer2", "questionTwoAnswer2", "questionThreeAnswer4", "questionFourAnswer2", "questionFiveAnswer4", "questionSixAnswer1", "questionSevenAnswer1","questionEightAnswer2", "questionNineAnswer4", "questionTenAnswer3"]

