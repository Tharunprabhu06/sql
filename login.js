// Default Username & Password

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "Tharun" && pass === "114") {
        window.location.href = "stu.html";
    } else {
        document.getElementById("msg").innerHTML = "Invalid Username or Password";
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default submission
    // Validation logic here
    window.location.href = "stu.html"; // Redirects to homepage
});

