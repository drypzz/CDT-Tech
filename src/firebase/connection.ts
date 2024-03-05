import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCfNk4iDR2S0xvKT57ke4q-3sBGgLA2Msg",
    authDomain: String(process.env.authDomain),
    projectId: String(process.env.projectId),
    storageBucket: String(process.env.storageBucket),
    messagingSenderId: String(process.env.messagingSenderId),
    appId: String(process.env.appId)
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { firebaseApp, db, auth, storage };