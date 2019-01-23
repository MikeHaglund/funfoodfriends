import firebase from "firebase";

var config = {
    apiKey: "AIzaSyDMRc6eDYw5ewwLSDAjHL0xbbSDsBGzsCE",
    authDomain: "funfoodfriends-c6501.firebaseapp.com",
    databaseURL: "https://funfoodfriends-c6501.firebaseio.com",
    projectId: "funfoodfriends-c6501",
    storageBucket: "funfoodfriends-c6501.appspot.com",
    messagingSenderId: "920348202703"
};
firebase.initializeApp(config);

export default firebase;