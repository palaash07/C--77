import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAi_YMI1MesucYieZE6PFj3HSM-yiB6C_w",
    authDomain: "booksanta-9cdc7.firebaseapp.com",
    projectId: "booksanta-9cdc7",
    storageBucket: "booksanta-9cdc7.appspot.com",
    messagingSenderId: "1016149090631",
    appId: "1:1016149090631:web:461980c85eedf2cee9ac62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()