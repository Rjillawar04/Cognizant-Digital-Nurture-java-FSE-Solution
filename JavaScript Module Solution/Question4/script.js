let events = [];


function addEvent(name, category, seats) {
    let event = {
        name: name,
        category: category,
        seats: seats
    };

    events.push(event);
}


addEvent("AI Workshop", "Technology", 50);
addEvent("Music Night", "Entertainment", 100);
addEvent("Cricket Tournament", "Sports", 30);

console.log(events);


function registerUser(eventName) {

    let event = events.find(e => e.name === eventName);

    if (event && event.seats > 0) {
        event.seats--;
        console.log("Registered Successfully for", event.name);
        console.log("Remaining Seats:", event.seats);
    } else {
        console.log("Registration Failed");
    }
}

registerUser("AI Workshop");


function filterEventsByCategory(category, callback) {

    let filtered = events.filter(event => event.category === category);

    callback(filtered);
}

// Callback Function
function displayEvents(eventList) {

    eventList.forEach(event => {
        console.log(event.name);
    });

}

filterEventsByCategory("Technology", displayEvents);

// 4. Closure Example
function registrationCounter(category) {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(category + " Registrations:", totalRegistrations);

    };

}

let techCounter = registrationCounter("Technology");

techCounter();
techCounter();
techCounter();