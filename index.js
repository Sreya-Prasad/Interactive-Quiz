// List of quiz data including the questions, options, and correct answers
const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Chennai", "Bangalore"],
        answer: "Delhi"
    },
    {
        question: "Who was the first Asian to win the Nobel Prize?",
        options: ["Rabindranath Tagore", "Mahatma Gandhi", "Venki Ramakrishnan", "CV Raman"],
        answer: "Rabindranath Tagore"
    },
    {
        question: "Which great person is known as \"Saint Of The Gutter\"?",
        options: [ "Mahatma Gandhi", "Dalai Lama","Mother Teresa", "Udai Shankar"],
        answer: "Mother Teresa"
    },
    {
        question: "Who was the first Indian to win the Booker Prize'?",
        options: ["R.K. Narayan", "Salman Rushdie", "Arundhati Roy", "V.S. Naipaul"],
        answer: "Arundhati Roy"
    },
    {
        question: "Who was the first Indian woman to go to space?",
        options: ["Sunita Williams", "Kalpana Chawla", "Sally Ride", "Valentina Tereshkova"],
        answer: "Kalpana Chawla"
    },
    {
        question: "Who was the first Indian women to win the Miss World title?",
        options: ["Sushmitha Sen", "Aishwarya Rai", "Priyanka Chopra", "Reita Faria Powell"],
        answer: "Reita Faria Powell"
    },
    {
        question: "Who was the first Indian to win the Olympic gold medal?",
        options: ["Abhinav Bindra", "Karnam Malleswari", "PV Sindhu", "Neeraj Chopra"],
        answer: "Abhinav Bindra"
    },
    {
        question: "Who is known as the \"Flying Sikh\"?",
        options: ["Milkha Singh", "Abhinav Bindra", "Mihir Sen", "Sachin Tendulkar"],
        answer: "Milkha Singh"
    },
    {
        question: "Which is the largest river in India?",
        options: ["Brahmaputra", "Narmada", "Ganga", "Sindhu"],
        answer: "Ganga"
    },
    {
        question: "Which country is India\'s largest trading partner?",
        options: ["China", "Japan", "UK", "USA"],
        answer: "USA"
    },
    {
        question: "How many World Cups has India\'s cricket team won?",
        options: ["0", "6", "2", "1"],
        answer: "2"
    },
    {
        question: "Which is the most populated country in the world?",
        options: ["China", "India", "USA", "Pakistan"],
        answer: "India"
    },
    {
        question: "What is the nickname of the Indian Cricket team?",
        options: ["Men in Black", "Men in Red", "Men in Green", "Men in Blue"],
        answer: "Men in Blue"
    },
    {
        question: "What city is considered the Silicon Valley of India?",
        options: ["Mumbai", "Chennai", "Bangalore", "Hyderabad"],
        answer: "Bangalore"
    },
    {
        question: "Which state is known as the\"God's Own Country\"?",
        options: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Delhi"],
        answer: "Kerala"
    }
];

// Initialization of variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

// Getting references to DOM elements
const timerEl = document.getElementById('time');
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const submitBtn = document.querySelector(".submit-btn");
const resultEl = document.querySelector('.result');
const scoreEl = document.getElementById('score');
const restartBtn = document.querySelector('.restart-btn');

// Function to load and display the current question and its options
function loadQuestion() {
    // End quiz if all questions are done
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }

    // Reset and start timer
    clearInterval(timerInterval);
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    startTimer();

    // Load current question
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = ''; // Clear previous options

    // Create radio buttons for each option
    currentQuiz.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="option" value="${option}">
            ${option}
        `;
        optionsEl.appendChild(label);
        optionsEl.appendChild(document.createElement("br"));
    });

    submitBtn.disabled = true;

    // Enable submit button when any radio is selected
    const radios = document.getElementsByName("option");
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            submitBtn.disabled = false;
        });
    });
}

submitBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return;

    const selectedOption = selected.value;
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
});

// Function to check the selected answer
function checkAnswer(selectedOption) {
    // Increase score if correct
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    // Load next question
    currentQuestion++;
    loadQuestion();
}

// Function to start countdown timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        // If time runs out, end the quiz
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Function to end the quiz and show results
function endQuiz() {
    clearInterval(timerInterval);
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    submitBtn.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = `${score} / ${quizData.length}`;
    restartBtn.style.display = 'block';

    // Show confetti animation
    launchConfetti();
}

// Event listener for restart button
restartBtn.addEventListener('click', () => {
    // Reset game variables
    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    timerEl.textContent = timeLeft;

    // Reset visibility
    questionEl.style.display = 'block';
    optionsEl.style.display = 'flex';
    submitBtn.style.display = 'inline-block';
    resultEl.style.display = 'none';
    restartBtn.style.display = 'none';

    // Start quiz again
    loadQuestion();
});

// Load first question when page loads
loadQuestion();

// Function to launch animated confetti (style 1)
function launchConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Fire confetti from random positions
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: Math.random(), y: Math.random() - 0.2 }
        }));
    }, 250);
}

// Function to launch animated confetti (style 2) - alternative version
function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Optional function to display result and trigger confetti (currently unused)
function showResult(score) {
    document.getElementById("score").innerText = `${score} / ${quizData.length}`;
    document.getElementById("result").style.display = "block";
    launchConfetti();  // 🎉 Trigger celebration
}
