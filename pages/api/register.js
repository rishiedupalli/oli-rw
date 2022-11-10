import app from "../../Functions/firebase/initFirebase";
import 'firebase/auth'
import { getAuth ,createUserWithEmailAndPassword, updatePassword, updateProfile } from "firebase/auth";

export default function handler(req, res) {
    if (req.method === 'POST') {
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => {
            const user = userCredential.user
            updateProfile(auth.currentUser, {
                displayName: req.body.username
            }).then(() => {
                console.log("set username")
            }).catch((e) => {
                console.log(e.message)
            })
            const { setUser } = useContext
            return user
        })
        .catch((error) => {
            const errorCode = error.errorCode
            const errorMessage = error.message
        })
    }
}