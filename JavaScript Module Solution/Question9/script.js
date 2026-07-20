function fetchEvents() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())

        .then(data => {

            const eventList = document.getElementById("eventList");
            eventList.innerHTML = "";

            data.forEach(event => {

                let li = document.createElement("li");
                li.textContent = event.name;

                eventList.appendChild(li);

            });

        })

        .catch(error => {

            console.log("Error:", error);

        });

}

async function loadEvents() {

    const loading = document.getElementById("loading");
    const eventList = document.getElementById("eventList");

    loading.style.display = "block";

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        eventList.innerHTML = "";

        data.forEach(event => {

            let li = document.createElement("li");
            li.textContent = event.name;

            eventList.appendChild(li);

        });

    }

    catch (error) {

        console.log("Error:", error);

    }

    finally {

        loading.style.display = "none";

    }

}