var startQuiz = document.querySelector("#start-quiz")
var optionButton = document.querySelectorAll(".OptionButton")
var endQuizMessage = document.querySelector("#endQuizMessage")
var finalScore = document.querySelector("#finalScore")
var timeRemaining = 75;
var score = 0;
var currentQuestion = 0


startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    startTimer();
    document.querySelector("#ContainerOne").style.display = "none";
    document.querySelector("#ContainerTwo").style.display = "block";
    displayQuestions();
});

function displayQuestions(){
    var question = questions[currentQuestion];
    document.querySelector("#question").innerHTML = question.question
    document.querySelector("#ChoiceOne").innerHTML = question.options[0]
    document.querySelector("#ChoiceTwo").innerHTML = question.options[1]
    document.querySelector("#ChoiceThree").innerHTML = question.options[2]
    document.querySelector("#ChoiceFour").innerHTML = question.options[3]
}

for (var i = 0; i < optionButton.length; i++ ) {
    optionButton[i].addEventListener("click", function quizTaker(event) {
        event.stopPropagation();

        if (event.currentTarget.innerText === questions[currentQuestion].answer){
            score++
            document.querySelector("#Answer").innerHTML = "That's correct!"
        } else { 
            document.querySelector("#Answer").innerHTML = "That's wrong!"
            timeRemaining = timeRemaining - 15;

        }
            currentQuestion++;

        if (currentQuestion < 5){
            displayOptions()
        }
    });
}

function startTimer () {
    var interval = setInterval(function() {
        timeRemaining--;
        document.querySelector("#timer").innerHTML = timeRemaining;
    
        if (timeRemaining === 0){
            clearInterval(interval);
            document.querySelector("#ContainerTwo").setAttribute("style", "display: none")
            document.querySelector("#ContainerThree").setAttribute("style", "diplay: block")

        } else if (currentQuestion === 5) {
            clearInterval(interval);
            document.querySelector("#ContainerTwo").setAttribute("style", "display: none")
            document.querySelector("#ContainerFour").setAttribute("style", "diplay: block")
            score = ((score) * (timeRemaining));

            if (isNaN(score)) {
                finalScore.innerHTML = "Your final score is : 0!";
            } else {
                endQuizMessage.innerHTML = "You have completed the quiz!";
                finalScore.innerHTML = "Your final score is: " + score;
            }
        }
    }, 1000)
}



