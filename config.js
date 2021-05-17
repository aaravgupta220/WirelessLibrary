import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAVz9I2ABEGEOBWlOhUt4B7x_gD0fy6ED4",
    authDomain: "wireleibrary-b65cb.firebaseapp.com",
    projectId: "wireleibrary-b65cb",
    storageBucket: "wireleibrary-b65cb.appspot.com",
    messagingSenderId: "375078358952",
    appId: "1:375078358952:web:faa8c46a9ab8c90bdc179d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore