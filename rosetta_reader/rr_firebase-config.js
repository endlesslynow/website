//This is rr_firebase-config.js

const firebaseConfig = {
    apiKey: "AIzaSyAL7cAt5eiFr8lPS64l1gJKxP0BYZqmOms",
    authDomain: "rosetta-reader-database.firebaseapp.com",
    databaseURL: "https://rosetta-reader-database-default-rtdb.firebaseio.com",
    projectId: "rosetta-reader-database",
    storageBucket: "rosetta-reader-database.firebasestorage.app",
    messagingSenderId: "105140538232",
    appId: "1:105140538232:web:cd7369cce7e7640fd5968d",
    measurementId: "G-RMKRDLQVFV"
};

console.log('Initializing Firebase...');
firebase.initializeApp(firebaseConfig);
window.rr_database = firebase.database();
console.log('Firebase initialized:', window.rr_database ? 'success' : 'failed');
