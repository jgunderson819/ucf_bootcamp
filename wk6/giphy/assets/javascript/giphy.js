let animals = [
    "rabbit",
    "horse",
    "porcupine"
];
// Add a button to HTML for every value in the animals array
function addButtons() {
    for (let i = 0; i < animals.length; i++) {
        let button = $("<button>");
        button.addClass("button");
        button.attr({
            "name": `${animals[i]}`,
            "type": "submit",
            "value": `${animals[i]}`
        });
        button.text(`${animals[i]}`);
        $(".giphyButtons").append(button);
    }
}

// Call the addButtons function
addButtons();