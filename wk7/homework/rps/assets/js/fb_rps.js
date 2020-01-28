
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

        //Display number of connections in connectedUsers
        connectedUsers.on("value", function (snap) {
            console.log(snap.numChildren());
        });S