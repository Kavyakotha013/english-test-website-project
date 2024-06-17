
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for topic links
    const topicLinks = document.querySelectorAll('#topics ul li a');
    topicLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const topicName = link.innerText;
            alert('Navigating to ' + topicName + ' page'); // Replace with your actual navigation logic
        });
    });
});
function selectTopic(topicName) {
    const isUserRegistered = localStorage.getItem('isUserRegistered') === 'true';

    if (isUserRegistered) {
        // Redirect to the quiz page with the selected topic
        window.location.href = `quiz.html?topic=${encodeURIComponent(topicName)}`;
    } else {
        // Display a message for non-registered users
        alert('You need to be registered to take the test. Please register first.');
    }
}



