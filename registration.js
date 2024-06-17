function submitForm() {
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var course = document.getElementById('course').value;

    // Validate form fields
    if (!firstName || !lastName || !email || !dob || !course) {
        alert("All fields are required");
        return;
    }

    // Store user data in localStorage
    var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob,
        course: course
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Display success message
    alert("Registration Successful!");

    // Redirect to user.html
    window.location.href = 'user.html';
}
// registration.js

function checkRegistration(subtopicName) {
    var userDataString = localStorage.getItem('userData');

    if (!userDataString) {
        // If not registered, display a message
        alert("You need to register first!");
    } else {
        // If registered, redirect to the subtopic page
        window.location.href = `quiz.html?topic=${encodeURIComponent(topicName)}`;
    }
}
