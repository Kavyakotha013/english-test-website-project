// quiz.js

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTopic = urlParams.get('topic');

    // Fetch questions for the selected topic (add more questions as needed)
    const questions = fetchQuestions(selectedTopic);

    // Shuffle the order of questions
    shuffleArray(questions);

    // Display questions and options
    displayQuestions(questions);
});

function fetchQuestions(topic) {
    // Add more questions for each topic as needed
    switch (topic) {
        case 'Parts of Speech':
    return [
        {
            question: 'Identify the preposition in the sentence: "The cat jumped over the fence."',
            choices: ['cat', 'jumped', 'over', 'fence'],
            correctAnswerIndex: 2,
        },
        {
            question: 'What is the adverb in the sentence: "He speaks quite softly."',
            choices: ['He', 'speaks', 'quite', 'softly'],
            correctAnswerIndex: 2,
        },
        {
            question: 'In the phrase "The big red car," what part of speech is "red"?',
            choices: ['Noun', 'Verb', 'Adjective', 'Adverb'],
            correctAnswerIndex: 2,
        },
        {
            question: 'Choose the correct sentence: "She is a good dancer." or "She dances good."',
            choices: ['She is a good dancer.', 'She dances good.'],
            correctAnswerIndex: 0,
        },
        {
            question: 'Identify the conjunction in the sentence: "I want both chocolate and vanilla ice cream."',
            choices: ['I', 'want', 'both', 'and'],
            correctAnswerIndex: 3,
        },
        {
            question: 'What is the gerund in the sentence: "Swimming is his favorite sport."',
            choices: ['Swimming', 'is', 'his', 'favorite'],
            correctAnswerIndex: 0,
        },
        {
            question: 'Choose the correct form: "She sings more beautifully than her sister." or "She sings more beautiful than her sister."',
            choices: ['She sings more beautifully than her sister.', 'She sings more beautiful than her sister.'],
            correctAnswerIndex: 0,
        },
        // Add more questions for this topic
    ];

        case 'Tenses':
            return [
                { question: 'What is the past tense of "sing"?', choices: ['Sang', 'Sung', 'Singed', 'Sing'], correctAnswer: 0 },
                { question: 'What is the future tense of "run"?', choices: ['Ran', 'Running', 'Will run', 'Run'], correctAnswer: 2 },
                // Add more questions for this topic
            ];
        case 'Noun-Pronoun Agreement':
            return [
                { question: 'What is a pronoun?', choices: ['A', 'B', 'C', 'D'], correctAnswer: 1 },
                { question: 'Select the plural form of "child."', choices: ['Childs', 'Childes', 'Children', 'Childs'], correctAnswer: 2 },
                // Add more questions for this topic
            ];
        // Add more cases for other topics
        default:
            return [];
    }
}

function displayQuestions(questions) {
    const quizContainer = document.getElementById('quizContainer');

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul>
                ${question.choices.map((choice, choiceIndex) => `
                    <li>
                        <input type="radio" name="choice${index}" value="${choiceIndex}" id="choice${index}-${choiceIndex}">
                        <label for="choice${index}-${choiceIndex}">${choice}</label>
                    </li>
                `).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionElement);
    });
}
function submitTest() {
    // Check the selected answers and calculate the score
    const questions = document.querySelectorAll('ul');
    let score = 0;

    questions.forEach((question, index) => {
        const selectedChoice = question.querySelector('input[name="choice' + index + '"]:checked');
        if (selectedChoice) {
            const selectedAnswer = parseInt(selectedChoice.value, 10);
            const correctAnswer = questions[index].correctAnswerIndex;

            if (selectedAnswer === correctAnswer) {
                score++;
            }
        }
    });

    // Get the total number of questions
    const totalQuestions = questions.length;

    // Create an object to store the score and totalQuestions
    const scoreData = {
        score: score,
        totalQuestions: totalQuestions
    };

    // Convert the object into a query string
    const queryString = Object.keys(scoreData)
        .map(key => `${key}=${scoreData[key]}`)
        .join('&');

    // Redirect to the score page along with the score and total number of questions
    window.location.href = `score.html?${queryString}`;
}





function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
