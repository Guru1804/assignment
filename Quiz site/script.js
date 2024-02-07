//creating a questions (array of object) to store the questions and answers
const questions=[{
    question: "What is the full name of Dr. Abdul Kalam ?",//question
    answer: [
        { text: "Avul Jakir Jalaluddin Kalam", correct: false},//options and it's value true or false
        { text: "Avul Pakir Jainulabdeen Abdul Kalam", correct: true},
        { text: "Abdul Sakir Jainulabdeen Kalam", correct: false},
        { text: "Abdul Sakeras Jainulabdeen Kalam", correct: false},
    ]
},{
    question: "When was Dr. A.P.J. Abdul Kalam born?",
    answer: [
        { text: "15 October 1931", correct: true},
        { text: "2 September 1929", correct: false},
        { text: "15 August 1923", correct: false},
        { text: "29 February 1936", correct: false},
    ]
},{
    question: "Which island is named after Dr. A.P.J. Abdul Kalam?",
    answer: [
        { text: "Wheeler Island, Odisha", correct: true},
        { text: "Landfall Island", correct: false},
        { text: "Bhavani Island", correct: false},
        { text: " Sriharikota", correct: false},
    ]
},{
    question: "Which of the following book is not written by Dr. A.P.J. Abdul Kalam?",
    answer: [
        { text: "Failure to Success: Legendary Lives", correct: false},
        { text: "You Are Born to Blossom", correct: false},
        { text: "Ignited Minds", correct: false},
        { text: "A House for Mr. Biswas ", correct: true},
    ]
},{
    question: "Which of the following statement is NOT correct about Dr. A.P.J. Abdul Kalam?",
    answer: [
        { text: "Dr. Abdul Kalam received the Bharat Ratna in 2007", correct: false},
        { text: "Dr. Abdul Kalam died on 17 July 2015 (aged 83) in Assam, India", correct: true},
        { text: "India 2020: A Vision for the New Millennium was written in 1998.", correct: false},
        { text: "Kalam worked at the Defence Research and Development Organisation", correct: false},
    ]
},{
    question: "Which of the following award is not given to Dr. A.P.J. Abdul Kalam?",
    answer: [
        { text: "Padma Bhushan", correct: false},
        { text: "Padma Vibhushan", correct: false},
        { text: "Shanti Swaroop Bhatnagar", correct: true},
        { text: "Bharat Ratna ", correct: false},
    ]
},{
    question: " Dr. A.P.J. Abdul Kalam was the ......President of India.",
    answer: [
        { text: " 9th ", correct: false},
        { text: "10th", correct: false},
        { text: "11th", correct: true},
        { text: "12th ", correct: false},
    ]
},{
    question: " APJ Abdul Kalam played a crucial role in which space mission? ",
    answer: [
        { text: "Chandrayaan-1", correct: false},
        { text: "Mangalyaan (Mars Orbiter Mission)", correct: true},
        { text: "GSLV Mk III ", correct: false},
        { text: "INSAT-3DR", correct: false},
    ]
},{
    question: "Where is Dr. APJ Abdul Kalam National Memorial located?",
    answer: [
        { text: "Pei Karumbu", correct: true},
        { text: "Krusadai Island", correct: false},
        { text: "Kattupalli Island", correct: false},
        { text: "Quibble Island", correct: false},
    ]
},{
    question: "Dr. A.P.J. Abdul Kalam in the Presidential election in 2002 succeeded:",
    answer: [
        { text: " K. R. Narayanan", correct: false},
        { text: "Lakshmi Sahgal", correct: true},
        { text: "Krishan Kant", correct: false},
        { text: "Bhairon Singh Shekhawat", correct: false},
    ]
}
]
//targeting all the html element to display the quiz 
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const questiondetail=document.getElementById("question-det");
const scoredisp=document.getElementById("score");

let currentQuestionIndex=0;
let score=0;
//this function is used to start the quiz and show the questions
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML="Question "+questionNo+" of "+questions.length+":";
    questiondetail.innerHTML=currentQuestion.question;
//here the options in the questions are iterated and displayed as buttons
    currentQuestion.answer.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        //when the user clicks the option we show the answer using this 
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn=e.target;
    const isCorrect=selectedbtn.dataset.correct ==="true";
    //if the selected button is correct option we add a class correct to it
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    //else we add incorrect class to it
    else{
        selectedbtn.classList.add("incorrect");
    }
    //this is used to group the button and to show the correct option also
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
    scoredisp.style.display="block";
    scoredisp.innerHTML=`Score:  ${score}`;
}

function showScore(){
    //here we call the reset state to remove all the options of questions
    resetState();
    scoredisp.style.display="none";
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    //used this to say diiferent message for certain score ranges
    if(score === 10){
        questiondetail.innerHTML="Congrats: Impressive mastery of quiz topics. Well played indeed!";
    }else if(score>7){
        questiondetail.innerHTML="Amazing: Your knowledge is impressive!.";
    }
    else if(score>5){
        questiondetail.innerHTML="Good: Well done!, but there's room for further exploration and learning.";
    }
    else if(score>3){
        questiondetail.innerHTML="Not bad: You've made a good start!.";
    }
    else if(score>=0){
        questiondetail.innerHTML="Remember:<q>A big shot is a little shot who keeps on shooting, <mark>so keep trying</mark>.</q>― A.P.J. Abdul Kalam";
    }
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
//this is used when the user clicks the next button and changes to next question or show score
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
//this defines the function to perform while clicking it
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
//this is used to start the quiz whie clicking the start button
let start=document.getElementById("start");
start.addEventListener('click',()=>{
    let first=document.getElementById("first")
    let quiz=document.getElementById("app");
    quiz.style.display="block";
    first.style.display="none";
    startQuiz();
})

