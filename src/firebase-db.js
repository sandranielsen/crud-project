import firebase from "firebase/app";
import 'firebase/firestore'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyC1u3YkP2dmh1mIzLE-vPDF1rcbTTY4h1M",
        authDomain: "vue-crud-project-41781.firebaseapp.com",
        databaseURL: "https://vue-crud-project-41781.firebaseio.com",
        projectId: "vue-crud-project-41781",
        storageBucket: "vue-crud-project-41781.appspot.com",
        messagingSenderId: "573642641264",
        appId: "1:573642641264:web:478fe1699ebe7c082309b5",
    })

    .firestore()

export const postRef = db.collection("posts")