import app from "../firebase/initFirebase"
import 'firebase/auth'
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";

export default function login(email, password) {
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        return user
    })
    .catch((e) => {
        const errorCode = error.errorCode
        const errorMessage = errorMessage
        return null
    })
}