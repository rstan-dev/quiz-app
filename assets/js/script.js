const quizData = [{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]; //sets the index of the question array to 0 //

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function deselectAnswers() {
    answerElements.forEach(answerElements => answerElements.checked = false)
};


function getSelected() {
    let answer // this is initially undeclared - called "initialised"


    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.id // pushes the checked radio id to variable answer
        }
    })

    return answer;
};


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    // console.log(answer) - shows which answer id in the concole to test its working //

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++; // increments the score if the answer is correct
        }

        currentQuiz++; //increments the quiz questions array

        if (currentQuiz < quizData.length) {
            loadQuiz(); // loads the quiz again (its been incremented to the next quiz question)

        } else {
            quiz.innerHTML = `
            <h2>You answered ${score} out of ${quizData.length} questions correctly. </h2>

            <button onclick="location.reload()">Reload Quiz</button>  
            `
        } // when its reached the end of the quizData array, it replaces all of the quiz div's inner HTML with h2 and new button text and new button functionality - The location.reload() method reloads the current URL, like the Refresh button.
    }



});