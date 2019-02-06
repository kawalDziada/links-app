import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBS6qjslYZWxr_rOPM73_dOEM_2lJSdHMo",
    authDomain: "links-app-e7fe4.firebaseapp.com",
    databaseURL: "https://links-app-e7fe4.firebaseio.com",
    projectId: "links-app-e7fe4",
    storageBucket: "links-app-e7fe4.appspot.com",
    messagingSenderId: "394497774339"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};
