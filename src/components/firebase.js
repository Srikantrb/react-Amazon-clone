import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCJOpOLIHWdjaOnTsfh2UJH3kj1ZzKyyHI",
  authDomain: "clone-2daea.firebaseapp.com",
  databaseURL: "https://clone-2daea.firebaseio.com",
  projectId: "clone-2daea",
  storageBucket: "clone-2daea.appspot.com",
  messagingSenderId: "725310575675",
  appId: "1:725310575675:web:e9dde0ba51ece87a46f81e",
};

const amazonApp = firebase.initializeApp(firebaseConfig);
const db = amazonApp.firestore();
export default amazonApp;
// export default db;
