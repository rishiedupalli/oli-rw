import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import app from '../Functions/firebase/initFirebase'
import initFirebase from '../Functions/firebase/initFirebase'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const auth = getAuth(app)
  const [user, setUser] = useState(null)
  UserContext = React.createContext()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })


  return (
    <div>
      <UserContext.Provider value={user}>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>
    </div>
  )
}

export default MyApp
