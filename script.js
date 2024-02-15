

let currentQuestion = 0;
let rightQuestion = 0;
let quizQuestions = 0;

let audioSucsess = new Audio('./sound/sucsess.mp3');
let audioFail = new Audio('./sound/fail.mp3');



function htmlQuestions() {
    document.getElementById('html').classList.add('active');
    document.getElementById('css').classList.remove('active');
    document.getElementById('js').classList.remove('active');
    let disabled = document.getElementById('quiz-screen');
    quizQuestions = htmlQuiz;
    let html = "HTML";
    disabled.innerHTML = startTemplate(html);
    currentQuestion = 0
    rightQuestion = 0;
}

function cssQuestions() {
    document.getElementById('css').classList.add('active');
    document.getElementById('html').classList.remove('active');
    document.getElementById('js').classList.remove('active');
    let disabled = document.getElementById('quiz-screen');
    quizQuestions = cssQuiz;
    let css = "CSS";
    disabled.innerHTML = startTemplate(css);
    currentQuestion = 0
    rightQuestion = 0;
}

function jsQuestions() {
    document.getElementById('js').classList.add('active');
    document.getElementById('css').classList.remove('active');
    document.getElementById('html').classList.remove('active');
    let disabled = document.getElementById('quiz-screen');
    quizQuestions = jsQuiz;
    let js = "JavaScript";
    disabled.innerHTML = startTemplate(js);
    currentQuestion = 0
    rightQuestion = 0;
}

function init() {
    let disabled = document.getElementById('quiz-screen');
    disabled.innerHTML = quwstionTemplate();
    document.getElementById('all-questions').innerHTML = quizQuestions.length;
    showQuestion();
}

function showQuestion() {
    let question = quizQuestions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    Progress()
}

function answer(selection) {// selection = ausgewählte antwort.
    let question = quizQuestions[currentQuestion];//um die aktuellt frage aus zu wählen.
    let selectedQuestionNumber = selection.slice(-1);// slice(-1) -> umd den lletzten charakter von einer string zu bestimmen ( ind diesem fall die 3 wenn die dritte Antwort aus gewählt wird)
    let idOfRightAnswer = `answer_${question['right_answer']}` // damit immer die richtige antwort aus gewählt wird.

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        audioSucsess.play();
        document.getElementById(selection).parentNode.classList.add('bg-success-subtle');
        rightQuestion++;
    } else {
        audioFail.play();
        document.getElementById(selection).parentNode.classList.add('bg-danger-subtle');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success-subtle');
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    selectedQuestionNumber == question['right_answer']
}

function nextQuestion() {
    currentQuestion++;
    if (gameIsOver()) {
        let disabled = document.getElementById('quiz-screen');
        disabled.innerHTML = endTemplate();
        score()
        tropyImg()
    } else {
        showQuestion();
        document.getElementById('next-button').disabled = true;
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        resetButtons();
    }
}

function gameIsOver() {
    return currentQuestion >= quizQuestions.length;
}

function tropyImg() {
    return document.getElementById('main-contaniner').innerHTML += `<img class="trophy" src="./img/tropy.png" alt="">`;
}

function resetButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success-subtle', 'bg-danger-subtle');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success-subtle', 'bg-danger-subtle');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success-subtle', 'bg-danger-subtle');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success-subtle', 'bg-danger-subtle');
}

function Progress() {
    let precent = ((currentQuestion + 1) / quizQuestions.length) * 100;
    precent = Math.round(precent)
    document.getElementById('progressbar').innerHTML = `${precent.toFixed(0)}%`;
    document.getElementById('progressbar').style = `width: ${precent}%;`;
}

function score() {
    document.getElementById('score').innerHTML = `${rightQuestion}/${quizQuestions.length}`;
}
