$(document).ready(function () {

    console.log("hello")

    $("#questionsAndTimer").hide();

    

    $("#start").on("click", function () {
    
        $("#questionsAndTimer").show()

        clearInterval(countdownInterval)

        countdownInterval = setInterval(decrement, 1000);


    });

       
       function decrement() {

    
                number--;
        
            
                $("#Timer").text(number);
        
        
            
                if (number === 0) {
        
            
                stop();
        
                
                alert("Time's up baby!");
                }
      }

    
  
     
    function stop() {
  
        clearInterval(countdownInterval)
      
    };

    function insertAnswer(question, answer){
        console.log(`We got a answer to  question: ${question} =>> ${answer}`)
        playerGuesses[question] = answer;
        console.log("Updated Array: => " + playerGuesses )
    }
    
    //document.getElementById("Yool").addEventListener("click",insertAnswer(0,"Yool"));
    //document.getElementById("Josh Groban").addEventListener("click",insertAnswer(0,"Josh Groban"));
   
    $("Yool").on("click",insertAnswer(0,"Yool"));
    

    $("#questionOneAnswer1").on("click", function () {
        console.log("hello")
        playerGuesses[0] = "questionOneAnswer1"
        $("#playerGuesses").text(playerGuesses[0])
        console.log(playerGuesses[0])
        console.log(playerGuesses)
    });

    $("#questionOneAnswer2").on("click", function () {
        playerGuesses[0] = "questionOneAnswer2"
    });

    $("#questionOneAnswer3").on("click", function () {
        playerGuesses[0] = "questionOneAnswer3"
    });

    $("#questionOneAnswer4").on("click", function () {
        playerGuesses[0] = "questionOneAnswer4"
    });

    $("#questionTwoAnswer1").on("click", function () {
        playerGuesses[1] = "questionTwoAnswer1"
    });

    $("#questionTwoAnswer2").on("click", function () {
        playerGuesses[1] = "questionTwoAnswer2"
    });

    $("#questionTwoAnswer3").on("click", function () {
        playerGuesses[1] = "questionTwoAnswer3"
    });

    $("#questionTwoAnswer4").on("click", function () {
        playerGuesses[1] = "questionTwoAnswer4"
        console.log(playerGuesses)
    });



    console.log(playerGuesses[0])




});



var playerGuesses = [];

var number = 100;

var countdownInterval;



var correctAnswers = ["#questionOneAnswer2", "#questionTwoAnswer2"]

