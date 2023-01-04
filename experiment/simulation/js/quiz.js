// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What is the starting node of this traversal?",
        imgSrc : "images/1.png",
        choiceA : "A) 0 ",
        choiceB : "B) 1",
        choiceC : "C) 3",
        choiceD : "D) 7",
        correct : "B"

    },{
        question : "What is the frontier of node 8?",
        imgSrc : "images/2.png",
        choiceA : "A)7 and 9",
        choiceB : "B)7, 9, and 4",
        choiceC : "C)7, 9, and 17",
        choiceD : "D)8",
        correct : "A"
    },{
        question : "What node is the parent node of 7 in the traversal?",
        imgSrc : "images/3.png",
        choiceA : "A)0",
        choiceB : "B)14",
        choiceC : "C)8",
        choiceD : "D)11",
        correct : "D"
      },{
        question : "When the DFS reaches node 1, where will it go next?",
        imgSrc : "images/4.png",
        choiceA : "A)0",
        choiceB : "B)3",
        choiceC : "C)5",
        choiceD : "D)2",
        correct : "C"
      },{
        question : "Which nodes will not be touched during the traversal?",
        imgSrc : "images/5.png",
        choiceA : "A)None",
        choiceB : "B)1 and 4",
        choiceC : "C)9,13,11,15, and 16",
        choiceD : "D)1,4,0,7,10,14",
        correct : "D"
      },{
        question:  "What is the DFS traversal if the starting node is 0?",
        imgSrc : "images/6.gif",
        choiceA : "A)0,1,2,4,6,5,7,3",
        choiceB : "B)0,1,2,3,4,5,6,7",
        choiceC : "C)0,1,3,2,5,7,4,6",
        choiceD : "D)7,6,5,4,3,2,1,0",
        correct : "A"
      }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 300; // 5min
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";

    // scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
