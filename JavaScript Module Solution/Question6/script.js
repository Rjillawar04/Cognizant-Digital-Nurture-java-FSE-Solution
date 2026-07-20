
let events = [];

events.push(
    {
        name: "Music Night",
        category: "Music"
    },
    {
        name: "Baking",
        category: "Workshop"
    },
    {
        name: "Rock Concert",
        category: "Music"
    },
    {
        name: "Coding Bootcamp",
        category: "Technology"
    }
);

console.log("All Events");
console.log(events);

let musicEvents = events.filter(function(event) {
    return event.category === "Music";
});

console.log("Music Events");
console.log(musicEvents);


let displayCards = events.map(function(event) {
    return event.category + " on " + event.name;
});

console.log("Display Cards");
console.log(displayCards);