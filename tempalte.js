function startTemplate(a) {
    return `
    <div class="card-body start-screen" >
        <h4>Welcome to <br> the awesome ${a} quiz!</h4>
        <p>Ready for the challenge?</p>
        <button class="btn btn-warning" onclick="init()">Start Now ></button>
    </div>
    `;
}

function quwstionTemplate() {
    return `
    <div class="card-body">

    <h5 class="card-title" id="question">Fage</h5>

    <div class="card mb-2 answer" onclick="answer('answer_1')">
        <div class="card-body" id="answer_1">
            1
        </div>
    </div>
    <div class="card mb-2  answer" onclick="answer('answer_2')">
        <div class="card-body" id="answer_2">
            2
        </div>
    </div>
    <div class="card mb-2 answer" onclick="answer('answer_3')">
        <div class="card-body" id="answer_3">
            3
        </div>
    </div>
    <div class="card mb-2 answer" onclick="answer('answer_4')">
        <div class="card-body" id="answer_4">
            4
        </div>
    </div>

    <div class="question-footer answer">
        <span><b id="current-question">1</b> von <b id="all-questions">5</b> Fragen</span>
        <button onclick="nextQuestion()" class="btn btn-secondary green" id="next-button" disabled>nächte Fragen</button>
    `;
}

function endTemplate() {
    return `
    <div class="card-body end-screen ">
        <img src="./img/brain result.png"  >
        <h4>COMPLETE <br> HTML QUIZ</h4>
        <div class="score" >
            <h4 class="orange">YOUR SCORE</h4>
            <h4 id="score">10/10</h4>
        </div>
        <button class="btn btn-secondary">SHARE</button>
        <a href="index.html">New Quiz</a>
    </div>
    `;
}