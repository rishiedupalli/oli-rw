import Navbar from '../components/Navbar'
import initFirebase from '../Functions/firebase/initFirebase'
import '../styles/globals.css'
import { useState } from 'react'
import { UserContext } from '../Functions/auth/contexts/UserContext'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState()

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>

    </div>
  )
}

export default MyApp
