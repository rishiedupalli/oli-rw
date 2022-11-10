import app from "../firebase/initFirebase"
import 'firebase/auth'
import { getAuth , createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import createUserRecord from "../database/createUserRecord";

export default function register(email, password, username) {
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        createUserRecord(user.uid, username)
        updateProfile(auth.currentUser, {
            displayName: username
        }).then(() => {
            console.log(user.displayName)
            console.log(user.uid)
        }).catch((e) => {
            console.log(e.message)
        })
        return user
    })
    .catch((error) => {
        const errorCode = error.errorCode
        const errorMessage = error.message
        return null
    })
}