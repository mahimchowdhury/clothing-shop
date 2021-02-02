import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCyK7vtwFh7jSuFUvyU2GTPhiSPbD1tNgA",
    authDomain: "crown-shop-ba6cc.firebaseapp.com",
    projectId: "crown-shop-ba6cc",
    storageBucket: "crown-shop-ba6cc.appspot.com",
    messagingSenderId: "349235931156",
    appId: "1:349235931156:web:9912b07698c3a56afa5f01",
    measurementId: "G-GPVQTW3FF5"
  }
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;