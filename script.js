let questions = [
    {
        "question": "Who invented HTML?",
        "answer_1": "Konrad Audenauer",
        "answer_2": "Miley Cyrus",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Robbie Williams",
        "right_answer": 3
    },
    {
        "question": "Which HTML element is used to insert a hyperlink into a webpage?",
        "answer_1": "link",
        "answer_2": "a",
        "answer_3": "href",
        "answer_4": "url",
        "right_answer": 2
    },
    {
        "question": "What is the correct order of HTML tags for structuring a simple webpage?",
        "answer_1": "body, header, main, footer",
        "answer_2": "header, body, footer, main",
        "answer_3": "header,main, footer, body",
        "answer_4": "body, footer, header, main",
        "right_answer": 1
    },
    {
        "question": "What HTML element is used to represent a list of items without a specific order?",
        "answer_1": "ol",
        "answer_2": "dl",
        "answer_3": "li",
        "answer_4": "ul",
        "right_answer": 4
    },
    {
        "question": "Which HTML element is used to include an external CSS file into an HTML document?",
        "answer_1": "style",
        "answer_2": "script",
        "answer_3": "meta",
        "answer_4": "link",
        "right_answer": 4
    },
    {
        "question": "Which HTML element is used to define a table?",
        "answer_1": "tr",
        "answer_2": "table",
        "answer_3": "td",
        "answer_4": "th",
        "right_answer": 2
    },
    {
        "question": "Which HTML element is used to define a paragraph?",
        "answer_1": "paragraph",
        "answer_2": "text",
        "answer_3": "p",
        "answer_4": "para",
        "right_answer": 3
    },
    {
        "question": "Which HTML element is used to insert an image into a webpage?",
        "answer_1": "img",
        "answer_2": "picture",
        "answer_3": "image",
        "answer_4": "src",
        "right_answer": 1
    },
    {
        "question": "HTML element is used to force a line break within a paragraph?",
        "answer_1": "nl",
        "answer_2": "br",
        "answer_3": "lb",
        "answer_4": "newline",
        "right_answer": 2
    },
    {
        "question": "What HTML element is used to mark up a numbered text section?",
        "answer_1": "ol",
        "answer_2": "li",
        "answer_3": "num",
        "answer_4": "ul",
        "right_answer": 1
    },

];

let currentQuestion = 0;
let rightQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    Progress()
}

function answer(selection) {// selection = ausgewählte antwort.
    let question = questions[currentQuestion];//um die aktuellt frage aus zu wählen.
    let selectedQuestionNumber = selection.slice(-1);
    // slice(-1) -> umd den lletzten charakter von einer string zu bestimmen ( ind diesem fall die 3 wenn die dritte Antwort aus gewählt wird)
    let idOfRightAnswer = `answer_${question['right_answer']}` // damit immer die richtige antwort aus gewählt wird.

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success-subtle');
        rightQuestion++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger-subtle');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success-subtle');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById('endScrean').style = '';
        document.getElementById('questionBody').style = 'display: none;';
        score()
        // TODO: Show end screen!
    } else {

        showQuestion();
        
        document.getElementById('next-button').disabled = true;
        document.getElementById('current-question').innerHTML = currentQuestion + 1;

        document.getElementById('answer_1').parentNode.classList.remove('bg-success-subtle', 'bg-danger-subtle');
        document.getElementById('answer_2').parentNode.classList.remove('bg-success-subtle', 'bg-danger-subtle');
        document.getElementById('answer_3').parentNode.classList.remove('bg-success-subtle', 'bg-danger-subtle');
        document.getElementById('answer_4').parentNode.classList.remove('bg-success-subtle', 'bg-danger-subtle');
    }
}

function Progress() {
    let precent = ((currentQuestion+1)/questions.length)*100;
    precent = Math.round(precent)
    document.getElementById('progressbar').innerHTML = `${precent.toFixed(0)}%`;
    document.getElementById('progressbar').style = `width: ${precent}%;`;
}

function score() {
    document.getElementById('score').innerHTML = `${rightQuestion}/${questions.length}`;
}
