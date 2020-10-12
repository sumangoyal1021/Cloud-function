const { admin } = require('firebase-admin/lib/database');
const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log("hello suman")
    response.send("Hello from Firebase!");
});

// callable function

exports.sayHello = functions.https.onCall((data, context) => {
    return 'hello, suman';
});