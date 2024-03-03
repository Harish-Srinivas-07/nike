// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBKbLiASJslrnWe-tqVPZ0YDygFmUJwKWs",
    authDomain: "saec-bus-testing.firebaseapp.com",
    databaseURL: "https://saec-bus-testing-default-rtdb.firebaseio.com",
    projectId: "saec-bus-testing",
    storageBucket: "saec-bus-testing.appspot.com",
    messagingSenderId: "623748477674",
    appId: "1:623748477674:web:5c8e89eea337792af81d93"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
