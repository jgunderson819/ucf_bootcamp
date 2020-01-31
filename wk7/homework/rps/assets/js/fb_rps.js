let database = firebase.database();

// Create varible to call connections to database
let connectedRef = database.ref(".info/connected");
// Create snapshot of connectedRef to track connections
let connectedUsers = database.ref('/connections');



//Added entry into connected users for every connection logged in .info/connected
connectedRef.on("value", function (snap) {
        if (snap.val()) {
            connectedUsers.push(true).onDisconnect().remove();
        }
    },
    function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

connectedUsers.on("value", function (snap) {
    if (snap.val()) {
        if (snap.numChildren() <= 2) {
            database.ref("players/").push({
                player: true,
                playerChoice: "",
            }).onDisconnect().remove();
        }
    }
});



// //Display number of connections in connectedUsers
// connectedUsers.on("value", function (snap) {
//     let numUsers = snap.numChildren();
//     console.log(numUsers);

//     if (numUsers < 2) {
//         database.ref("players/").push({
//             player: true,
//             playerChoice: "",
//         }).onDisconnect().remove();
//     } else {
//         return false;
//     }
// });



// 1. Create a way to track number of connections. Number of connections will be the number of players. Two players MAX.
//. Create unique identifier for each player
// 2. Create click event for player choices.
// Assign the selected choice to a variable
// Check to see if both players of selected a choice
// If both players have selected a choice then check for a winner
// If p1Choice === 'rock' & p2Choice === 'paper' then player 2 wins
//   if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
//     if ((userGuess === "r" && computerGuess === "s") ||
//     (userGuess === "s" && computerGuess === "p") || 
//     (userGuess === "p" && computerGuess === "r")) {
//     wins++;
//   } else if (userGuess === computerGuess) {
//     ties++;
//   } else {
//     losses++;
// 3. If a player types something in the messageInput add it to the chatbox with an identider and           timestamp
// 4. If a player disconnects reset the game.