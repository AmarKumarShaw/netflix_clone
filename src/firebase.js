import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFO_3JevjSycLzQnWSPrrqKfP0Fxo-2_U",
  authDomain: "netflix-clone-f2f68.firebaseapp.com",
  projectId: "netflix-clone-f2f68",
  storageBucket: "netflix-clone-f2f68.appspot.com",
  messagingSenderId: "441709722136",
  appId: "1:441709722136:web:2c7b805621a43ca916e16d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();

// export { auth };
// export default db;
export { auth, db };

