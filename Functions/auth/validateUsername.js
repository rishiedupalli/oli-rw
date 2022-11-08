import { app } from '../firebase/initFirebase'
function validateUsername(username) {
    app.firestore()
    .collection('users')
    .orderByChild("displayName")
    .equalTo(username).once("value",snapshot => {
        if (snapshot.exists()) {
            return false
        }
    })
    return true
}

export default validateUsername