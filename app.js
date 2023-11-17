


var firebaseConfig = {
    apiKey: "AIzaSyD0Bp8z1y8KcmwlpuF3rAc-bL2nfdH2Wzg",
    authDomain: "login-59828.firebaseapp.com",
    databaseURL: "https://login-59828-default-rtdb.firebaseio.com",
    projectId: "login-59828",
    storageBucket: "login-59828.appspot.com",
    messagingSenderId: "823378258386",
    appId: "1:823378258386:web:61c170432e263a5cf0c00b"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function getVal() {
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var section = document.getElementById("section")

    var obj = {
        name: name.value,
        email: email.value,
        password: password.value,
        section: section.value
    }


    var key = Math.random() * 351561245146;


    firebase.database().ref(`detail` + Math.round(key)).set(obj)

    firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            firebase
                .auth()
                .currentUser.sendEmailVerification()
                .then(() => {
                    console.log("email sent...");
                });
            setTimeout(function () {
                window.location.href = "dashboard.html";
            }, 2000);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });

}

