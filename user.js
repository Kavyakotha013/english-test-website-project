document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user data from localStorage
    var userDataString = localStorage.getItem('userData');

    if (!userDataString) {
        // If no user data is found, redirect back to registration.html
        displayUserInfo(userData);
    } else {
        // Parse user data and display it on the page
        var userData = JSON.parse(userDataString);
        displayUserInfo(userData);
    }
});

function displayUserInfo(userData) {
    var userInfoContainer = document.getElementById('userInfo');
    
    if (!userData) {
        userInfoContainer.innerHTML = '<p><strong>Not Registered</strong></p>';
    } else {
        userInfoContainer.innerHTML += '<p><strong>First Name:</strong> ' + userData.firstName + '</p>';
        userInfoContainer.innerHTML += '<p><strong>Last Name:</strong> ' + userData.lastName + '</p>';
        userInfoContainer.innerHTML += '<p><strong>Email:</strong> ' + userData.email + '</p>';
        userInfoContainer.innerHTML += '<p><strong>Date of Birth:</strong> ' + userData.dob + '</p>';
        userInfoContainer.innerHTML += '<p><strong>Course:</strong> ' + userData.course + '</p>';
    }
}

