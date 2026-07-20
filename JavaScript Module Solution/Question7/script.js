
let events = [
    {
        name: "Music Night",
        category: "Music",
        seats: 5
    },
    {
        name: "Baking Workshop",
        category: "Workshop",
        seats: 2
    },
    {
        name: "Coding Bootcamp",
        category: "Technology",
        seats: 3
    }
];

let container = document.querySelector("#eventContainer");

function displayEvents() {

    container.innerHTML = "";

    events.forEach(function(event, index) {

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category : ${event.category}</p>
            <p>Seats : ${event.seats}</p>

            <button onclick="register(${index})">
                Register
            </button>

            <button onclick="cancel(${index})">
                Cancel
            </button>
        `;

        container.appendChild(card);

    });

}

function register(index){

    if(events[index].seats > 0){
        events[index].seats--;
    }
    else{
        alert("No Seats Available");
    }

    displayEvents();

}

function cancel(index){

    events[index].seats++;

    displayEvents();

}


displayEvents();