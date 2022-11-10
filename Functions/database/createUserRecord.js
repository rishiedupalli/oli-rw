import app from "../firebase/initFirebase"
import { getFirestore } from "firebase/firestore"
import { addDoc, collection } from "firebase/firestore"

export default function createUserRecord(uid, username) {
    const db = getFirestore(app)
    try {
        setDoc(doc(db, "users", uid), {
            username: username,
            access: "user"
        })
    } catch (e) {
        console.log(e)
    }
}