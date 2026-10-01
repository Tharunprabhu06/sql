// Check whether the user is logged in
// If not, redirect to the login page

if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// Display welcome message
window.onload = function () {

    let username = localStorage.getItem("username");

    if (username) {
        alert("Welcome " + username + "!");
    }

};

// Logout Function

function logout() {

    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        sessionStorage.removeItem("loggedIn");

        window.location.href = "login.html";

    }

}