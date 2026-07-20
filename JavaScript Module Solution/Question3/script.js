
let events = [
    {
        name: "AI Workshop",
        date: "2026-08-20",
        seats: 10
    },
    {
        name: "Web Development",
        date: "2026-06-10",
        seats: 5
    },
    {
        name: "Python Bootcamp",
        date: "2026-09-15",
        seats: 0
    }
];

let today = new Date("2026-07-20");

let eventContainer = document.getElementById("events");


events.forEach(function(event) {

    let eventDate = new Date(event.date);

    if (eventDate > today && event.seats > 0) {

        eventContainer.innerHTML += `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Seats Available: ${event.seats}</p>
            <hr>
        `;

    } else {

        console.log(event.name + " is hidden.");

    }

});


function register(eventName) {

    try {

        let event = events.find(e => e.name === eventName);

        if (!event) {
            throw "Event not found!";
        }

        if (event.seats <= 0) {
            throw "No seats available!";
        }

        

        console.log("Registration Successful!");
        console.log("Remaining Seats:", event.seats);

    }
    catch(error) {

        console.log("Error:", error);

    }

}

register("AI Workshop");
register("Python Bootcamp");
register("Java Workshop");