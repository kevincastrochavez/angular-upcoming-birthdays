import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCABNbQQhLSoAZpFs_GAa9vB_uwniRJPHY",
  authDomain: "upcoming-birthday.firebaseapp.com",
  databaseURL: "https://upcoming-birthday-default-rtdb.firebaseio.com",
  projectId: "upcoming-birthday",
  storageBucket: "upcoming-birthday.appspot.com",
  messagingSenderId: "985977347285",
  appId: "1:985977347285:web:7fe6cfffaf8e0183a4165c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
