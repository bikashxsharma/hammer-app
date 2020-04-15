import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAbeHxnpY_JDj7fT1LrYpM4TNFDwvt1Ms4",
    authDomain: "hammer-app.firebaseapp.com",
    databaseURL: "https://hammer-app.firebaseio.com",
    projectId: "hammer-app",
    storageBucket: "hammer-app.appspot.com",
    messagingSenderId: "464565687060",
    appId: "1:464565687060:web:ec414fdfa01e85fbe2a801"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;