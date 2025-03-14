import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgD3RzpT4tFgDQ4n9AJYg43a98FPdJNMo",
  authDomain: "netflix-clone-88aee.firebaseapp.com",
  projectId: "netflix-clone-88aee",
  storageBucket: "netflix-clone-88aee.firebasestorage.app",
  messagingSenderId: "819086102173",
  appId: "1:819086102173:web:9c60a01829da04afab4e74"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async(name, email, password)=>{
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};