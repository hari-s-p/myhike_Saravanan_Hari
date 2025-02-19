//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
        apiKey: "AIzaSyB8ZvtRzagJyIOf5VkpxYCAXEC_97RJXbE",
        authDomain: "comp1800-demo-2025.firebaseapp.com",
        projectId: "comp1800-demo-2025",
        storageBucket: "comp1800-demo-2025.firebasestorage.app",
        messagingSenderId: "152376644743",
        appId: "1:152376644743:web:d4bb55847307e2aa269422"
      };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

