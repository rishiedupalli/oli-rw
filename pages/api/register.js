import { app } from '../../Functions/firebase/initFirebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default function register(req, res) {
    const auth = app.getAuth()
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
        const user = userCredential.user
        user.displayName = req.body.username
    })
    .catch((e) => {
        const error = e.errorCode
        const errorMessage = e.message
    })
}