// JavaScript for the logout page

function logout() {
    const isConfirmed = confirm('Are you sure you want to logout?');

    if (isConfirmed) {
        // Clear user details and redirect to the registration page
        localStorage.clear();
        window.location.href = 'registration.html';
    }
}
