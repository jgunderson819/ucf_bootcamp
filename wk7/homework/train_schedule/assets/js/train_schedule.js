let database = firebase.database();

// Create varible to call connections to database
let connectedRef = database.ref(".info/connected");
// Create snapshot of connectedRef to track connections
let connectedUsers = database.ref('/connections');

database.ref().orderByChild('frequency').on("value", function (snapshot) {
    $("#trainSchedule").empty();

    snapshot.forEach(function (childSnapshot) {

        let databaseTrainName = childSnapshot.val().trainName;
        let databaseTrainDestination = childSnapshot.val().trainDestination;
        let databaseFirstTrain = childSnapshot.val().firstTrain;
        let databaseFrequency = childSnapshot.val().frequency;

        // Assumptions
        var tFrequency = databaseFrequency;

        // Time is 3:30 AM
        var firstTime = databaseFirstTrain;

        // First Time (pushed back 1 year to make sure it comes before current time)
        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");

        // Current Time
        var currentTime = moment();

        // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

        // Time apart (remainder)
        var tRemainder = diffTime % tFrequency;

        // Minute Until Train
        var tMinutesTillTrain = tFrequency - tRemainder;

        // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");

        $("#trainSchedule").append(
            $("<tr>").append(
                $("<td>").text(databaseTrainName),
                $("<td>").text(databaseTrainDestination),
                $("<td>").text(databaseFrequency),
                $("<td>").text(moment(nextTrain).format("hh:mm A")),
                $("<td>").text(tMinutesTillTrain)
            )
        );
    });

});

$('#submit').on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#trainName").val().trim();
    var trainDestination = $("#trainDestination").val().trim();
    var firstTrain = $("#trainFirstTime").val().trim();
    var frequency = $("#trainFrequency").val().trim();

    if (trainName == "" || trainDestination == "" || firstTrain == "" || frequency == "") {
        alert("Required field is blank");
        return false;
    } else {

        // Creates local "temporary" object for holding employee data
        var newTrain = {
            trainName: trainName,
            trainDestination: trainDestination,
            firstTrain: firstTrain,
            frequency: frequency
        };

        console.log(newTrain);


        database.ref().push(newTrain);

        database.ref().on("child_added", function (childSnapshot, prevChildKey) {
            let databaseTrainName = childSnapshot.val().trainName;
            let databaseTrainDestination = childSnapshot.val().trainDestination;
            let databaseFirstTrain = childSnapshot.val().firstTrain;
            let databaseFrequency = childSnapshot.val().frequency;

            // Assumptions
            var tFrequency = databaseFrequency;

            // Time is 3:30 AM
            var firstTime = databaseFirstTrain;

            // First Time (pushed back 1 year to make sure it comes before current time)
            var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
            console.log(firstTimeConverted);

            // Current Time
            var currentTime = moment();
            console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

            // Difference between the times
            var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
            console.log("DIFFERENCE IN TIME: " + diffTime);

            // Time apart (remainder)
            var tRemainder = diffTime % tFrequency;
            console.log(tRemainder);

            // Minute Until Train
            var tMinutesTillTrain = tFrequency - tRemainder;
            console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

            // Next Train
            var nextTrain = moment().add(tMinutesTillTrain, "minutes");
            console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

            $("#trainName").val("");
            $("#trainDestination").val("");
            $("#trainFirstTime").val("");
            $("#trainFrequency").val("");

        });

    }

});