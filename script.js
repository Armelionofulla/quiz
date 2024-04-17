const questions = [
    {
        question: "Çfarë është DOM në JavaScript?",
        options: {
            A: "Document Object Model",
            B: "Data Object Management",
            C: "Digital Order Module"
        },
        correctAnswer: "A"
    },
    {
        question: "Cilën funksion ka JavaScript për të shfaqur një dritare modale?",
        options: {
            A: "displayModal()",
            B: "alert()",
            C: "showModalDialog()"
        },
        correctAnswer: "B"
    },
    {
        question: "Cilën prej këtyre deklaratave do ta përdornit për të krijuar një variabël në JavaScript?",
        options: {
            A: "new variable;",
            B: "var myVar;",
            C: "create myVar;"
        },
        correctAnswer: "B"
    },
];

let currentQuestionIndex = 0;
let userScore = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <strong><h3>${questions[currentQuestionIndex].question}</h3></strong><br>
        ${Object.entries(questions[currentQuestionIndex].options).map(([key, value]) =>
            `<label>
                <input type="radio" name="answer" value="${key}"> ${value}
            </label>`)
        }
   `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
            userScore++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
    else {
        alert('Ju lutem zgjidhni një nga alternativat.');
    }
}

function displayResult() {
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = `Ju keni përgjigjur saktë ${userScore} nga ${questions.length} pyetje.`;
    document.getElementById('next-btn').display = 'none';
}

displayQuestion();