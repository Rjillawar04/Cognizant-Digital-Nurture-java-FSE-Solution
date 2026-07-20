
function Event(name, category, seats) {
    this.name = name;
    this.category = category;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {
    if (this.seats > 0) {
        console.log(this.name + " is Available");
    } else {
        console.log(this.name + " is Full");
    }
};


let event1 = new Event("AI Workshop", "Technology", 50);
let event2 = new Event("Music Night", "Entertainment", 0);


event1.checkAvailability();
event2.checkAvailability();

console.log("Event 1 Details");

Object.entries(event1).forEach(function(entry) {
    console.log(entry[0] + " : " + entry[1]);
});