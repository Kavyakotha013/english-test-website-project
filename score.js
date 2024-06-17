// score.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the score and total number of questions from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const score = parseInt(urlParams.get('score'), 10);
    const totalQuestions = parseInt(urlParams.get('totalQuestions'), 10);

    // Display the score and total number of questions
    const scoreMessage = document.getElementById('scoreMessage');
    scoreMessage.innerText = `You scored ${score} out of ${totalQuestions}.`;

    // You can also include additional information or customize the display as needed

    // Optional: You may want to save the score or perform additional actions here
});
