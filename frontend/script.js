function showMessage() {
    alert("Welcome to my portfolio!");
}

const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    result.textContent = "Sending...";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("https://full-stack-repository.vercel.app/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();

        if (data.success) {
            result.textContent = "Message sent. Thank you!";
            form.reset();
        } else {
            result.textContent = "Error: " + data.error;
        }
    } catch (error) {
        result.textContent = "Unable to reach the server. Is it running?";
        console.error(error);
    }
});
