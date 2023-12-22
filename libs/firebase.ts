// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbsB1dCocweaXXNtD97AFJWOC4hlXT9JI",
  authDomain: "huh-portfolio.firebaseapp.com",
  projectId: "huh-portfolio",
  storageBucket: "huh-portfolio.appspot.com",
  messagingSenderId: "676132559658",
  appId: "1:676132559658:web:4c0984da539627a7429c53"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;