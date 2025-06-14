//List of quiz data including the questions,options and answers

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
        options: ["Mother Teresa", "Mahatma Gandhi", "Dalai Lama", "Udai Shankar"],
        answer: "Mother Teresa"
    },
    {
        question: "Who was the first Indian to win the Booker Prize'?",
        options: ["R.K. Narayan", "Salman Rushdie", "Arundhati Roy", "V.S. Naipaul"],
        answer: "Arundhati Roy"
    },
    {
        question: "Who was the first Indian woman to go to space?",
        options: ["Kalpana Chawla", "Sunita Williams", "Sally Ride", "Valentina Tereshkova"],
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
        options: ["Ganga", "Brahmaputra", "Narmada", "Sindhu"],
        answer: "Ganga"
    },
    {
        question: "Which country is India\'s largest trading partner?",
        options: ["USA", "China", "Japan", "UK"],
        answer: "USA"
    },
    {
        question: "How many World Cups has India\'s cricket team won?",
        options: ["6", "2", "3", "1"],
        answer: "2"
    },
    {
        question: "Which is the most populated country in the world?",
        options: ["China", "India", "USA", "Pakistan"],
        answer: "India"
    },
    {
        question: "What is the nickname of the Indian Cricket team?",
        options: ["Men in Blue", "Men in Red", "Men in Green", "Men in Black"],
        answer: "Men in Blue"
    },
    {
        question: "What city is considered the Silicon Valley of India?",
        options: ["Bangalore", "Mumbai", "Chennai", "Hyderabad"],
        answer: "Bangalore"
    },
    {
        question: "Which state is known as the\"God's Own Country\"?",
        options: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Delhi"],
        answer: "Kerala"
    }
        ];

        let currentQuestion = 0;
        let score = 0;
        let timeLeft = 30;
        let timerInterval;
        const timerEl = document.getElementById('time');
        const questionEl = document.querySelector('.question');
        const optionsEl = document.querySelector('.options');
        const resultEl = document.querySelector('.result');
        const scoreEl = document.getElementById('score');
        const restartBtn = document.querySelector('.restart-btn');

        // Function to load the question
        function loadQuestion() {
            if (currentQuestion >= quizData.length) {
                endQuiz();
                return;
            }
            clearInterval(timerInterval);
            timeLeft = 30;
            timerEl.textContent = timeLeft;
            startTimer();
            const currentQuiz = quizData[currentQuestion];
            questionEl.textContent = currentQuiz.question;
            optionsEl.innerHTML = ''; // Clear previous options
            currentQuiz.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('option');
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsEl.appendChild(button);
            });
        }

        // Check the answer
        function checkAnswer(selectedOption) {
            if (selectedOption === quizData[currentQuestion].answer) {
                score++;
            }
            currentQuestion++;
            loadQuestion();
        }

        // Start the timer
        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                timerEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    endQuiz();
                }
            }, 1000);
        }

        // End the quiz and show the results
        function endQuiz() {
            clearInterval(timerInterval);
            questionEl.style.display = 'none';
            optionsEl.style.display = 'none';
            resultEl.style.display = 'block';
            scoreEl.textContent = score;
            restartBtn.style.display = 'block';

            // Trigger confetti
            launchConfetti();
        }

        // Restart the quiz
        restartBtn.addEventListener('click', () => {
            // Reset variables
            currentQuestion = 0;
            score = 0;
            timeLeft = 30;
            timerEl.textContent = timeLeft;

            // Reset the display
            questionEl.style.display = 'block';
            optionsEl.style.display = 'flex'; // Ensure options are displayed correctly
            resultEl.style.display = 'none';
            restartBtn.style.display = 'none';

            // Load the first question
            loadQuestion();
        });

        // Initialize the quiz with the first question
        loadQuestion();




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
        // Since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: Math.random(), y: Math.random() - 0.2 }
        }));
    }, 250);
}












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

// Example: trigger confetti when quiz ends
function showResult(score) {
    document.getElementById("score").innerText = score;
    document.getElementById("result").style.display = "block";
    launchConfetti();  // 🎉 Party popper here!
}