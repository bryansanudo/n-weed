import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArtRW1HaCXWYzTOMebv5lNgNcTBcmZHl4",
  authDomain: "apppoligran.firebaseapp.com",
  projectId: "apppoligran",
  storageBucket: "apppoligran.appspot.com",
  messagingSenderId: "414567357672",
  appId: "1:414567357672:web:1f32cc5a3bdd7e14e6fd5d",
};

const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);
