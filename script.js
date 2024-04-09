function openModal() {
    document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "baby" && password === "mamaw mag mwamwa") {
        window.location.href = "main.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
