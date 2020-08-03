import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAPCq5oywpxOB7oVV6c8D-0rxnSV2nCI2s",
    authDomain: "birthday-39825.firebaseapp.com",
    databaseURL: "https://birthday-39825.firebaseio.com",
    projectId: "birthday-39825",
    storageBucket: "birthday-39825.appspot.com",
    messagingSenderId: "948963772501",
    appId: "1:948963772501:web:f65f8507342e7e98a1acdc"
};

export default firebase.initializeApp(firebaseConfig);