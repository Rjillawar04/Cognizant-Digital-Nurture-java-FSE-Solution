const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    message.innerHTML = "Submitting registration...";

    // Simulate delayed response
    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)

        })

        .then(response => {

            if (!response.ok) {
                throw new Error("Registration Failed");
            }

            return response.json();
        })

        .then(data => {

            message.style.color = "green";
            message.innerHTML = "Registration Successful!";

            console.log(data);

        })

        .catch(error => {

            message.style.color = "red";
            message.innerHTML = "Registration Failed!";

            console.log(error);

        });

    }, 2000);   // 2-second delay

});