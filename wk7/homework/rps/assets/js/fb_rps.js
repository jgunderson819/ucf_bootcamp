        // Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCckmEbSfVqM3x89V3uP4BtGsnghy_PrWo",
            authDomain: "rock-paper-scissors-fc33f.firebaseapp.com",
            databaseURL: "https://rock-paper-scissors-fc33f.firebaseio.com",
            projectId: "rock-paper-scissors-fc33f",
            storageBucket: "rock-paper-scissors-fc33f.appspot.com",
            messagingSenderId: "701121955513",
            appId: "1:701121955513:web:7f3a6523e7bbec2ee2bd68",
            measurementId: "G-1QPD5XZDWY"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        // Create variable to store fire
        let database = firebase.database();
        