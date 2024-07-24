import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqIydpu3NuHHJRM8xwAF1V9wUCZ7WMzQM",
  authDomain: "myecom-1c50b.firebaseapp.com",
  projectId: "myecom-1c50b",
  storageBucket: "myecom-1c50b.appspot.com",
  messagingSenderId: "758834352385",
  appId: "1:758834352385:web:009fb74d7aca11513e8b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }