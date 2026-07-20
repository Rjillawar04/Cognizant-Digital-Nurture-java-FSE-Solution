
function registerEvent(eventName) {
    alert("Successfully registered for " + eventName);
}

const category = document.getElementById("category");

category.onchange = function () {
    let selectedCategory = category.value;
    alert("Selected Category: " + selectedCategory);
};
const searchBox = document.getElementById("searchBox");

searchBox.onkeydown = function (event) {

    if (event.key === "Enter") {
        let searchText = searchBox.value;
        alert("Searching for: " + searchText);
    }
};