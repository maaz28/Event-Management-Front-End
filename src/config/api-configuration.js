import firebase from 'firebase/app';
import 'firebase/storage';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXuoFSkoLWay8Q8BDple2JWN6Hig4RSRI",
    authDomain: "hangout-portal.firebaseapp.com",
    databaseURL: "https://hangout-portal.firebaseio.com",
    projectId: "hangout-portal",
    storageBucket: "hangout-portal.appspot.com",
    messagingSenderId: "379996172197"
  };
  firebase.initializeApp(config);
// Firebase Storage API
export const storage = firebase.storage();
// MAIN API
export const api_base_url = "https://event-management-server.herokuapp.com";