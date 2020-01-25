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

// Create new button everytime something is entered into the textbox and submitted
$("#submit").on("click", function () {
    event.preventDefault();
    if ($("#animalText").val() == "") {
        alert("You need to enter a value");
    } else {
        let value = $("#animalText").val().trim();
        animals.push(value);
        let button = $("<button>");
        button.addClass("button");
        button.attr({
            "name": `${animals[animals.length-1]}`,
            "type": "submit",
            "value": `${animals[animals.length-1]}`
        });
        button.text(`${animals[animals.length-1]}`);
        $(".giphyButtons").append(button);
        $("#animalText").val("");
    }
});