// const { admin } = require('firebase-admin/lib/database');
const functions = require('firebase-functions');

const cors = require('cors')({ origin: true });
// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();


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

// Cloud firestore
exports.myFunction = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        var name = request.body.data.Name;
        var description = request.body.data.Description;
        var title = request.body.data.Title;
        var result;
        firestore.collection("info").doc(name).set({
                Name: name,
                Title: title,
                Description: description
            })
            .then(() => {
                result = { data: "ok" };
                console.log('successfully saved');
                return response.status(200).send(result);
            })
            .catch(() => {
                console.error('error', error);
            });
    });
});

// Cloud storage