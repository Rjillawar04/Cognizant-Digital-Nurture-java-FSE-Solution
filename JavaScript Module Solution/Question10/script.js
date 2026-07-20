
const eventList = [
    {
        id: 1,
        name: "Tech Conference",
        category: "Technology",
        location: "Pune"
    },
    {
        id: 2,
        name: "Football Tournament",
        category: "Sports",
        location: "Mumbai"
    },
    {
        id: 3,
        name: "Music Festival",
        category: "Music",
        location: "Nagpur"
    }
];

function registerEvent(eventName = "Unknown Event") {
    alert("Registered for: " + eventName);
}

function displayEvents() {

    let output = "";

    eventList.forEach(event => {

        
        const { name, category, location } = event;

        output += `
            <h3>${name}</h3>
            <p>Category : ${category}</p>
            <p>Location : ${location}</p>

            <button onclick="registerEvent('${name}')">
                Register
            </button>

            <hr>
        `;
    });

    document.getElementById("events").innerHTML = output;
}

function filterTechnology() {

    // Spread Operator (Clone Array)
    const copiedEvents = [...eventList];

    const filteredEvents = copiedEvents.filter(
        event => event.category === "Technology"
    );

    let output = "";

    filteredEvents.forEach(event => {

        const { name, category, location } = event;

        output += `
            <h3>${name}</h3>
            <p>Category : ${category}</p>
            <p>Location : ${location}</p>
            <hr>
        `;
    });

    document.getElementById("events").innerHTML = output;
}