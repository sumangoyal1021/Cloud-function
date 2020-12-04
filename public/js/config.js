// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAorwFms4cWXhmUjgVw7BczpG8n-BnYr3E",
    authDomain: "qcode-45886.firebaseapp.com",
    databaseURL: "https://qcode-45886.firebaseio.com",
    projectId: "qcode-45886",
    storageBucket: "qcode-45886.appspot.com",
    messagingSenderId: "278152110295",
    appId: "1:278152110295:web:6fc99954946d300755d092",
    measurementId: "G-8XGK7N4YFS"
};
firebase.initializeApp(firebaseConfig);

// ********************* say hello function call *********************************

function display() {
    var button = document.getElementById('call');
    var sayHello = firebase.functions().httpsCallable('sayHello');
    sayHello().then(result => {
        console.log(result.data);
    });
};

//************************ cloud firestore **********************************

function submit() {
    var name = document.getElementById('name').value;
    var description = document.getElementById('des').value;
    var title = document.getElementById('title').value;


    var storeData = firebase.functions().httpsCallable('myFunction');
    storeData({ Name: name, Description: description, Title: title }).then(result => {
        console.log(result);
    });
};

// *********************** Cloud Storage ****************************

function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    const myimage = storageRef.child('myimage.jpg');

    const file = files.item(0);
    const task = myimage.put(file);
    task.then(snapshot  => {
         console.log(snapshot);
         const url = snapshot.downloadURL;
         document.getElementById('imgUplaod').setAttribute('src', url);
    });
}