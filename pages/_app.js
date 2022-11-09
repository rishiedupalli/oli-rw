import Navbar from '../components/Navbar'
import '../styles/globals.css'

import initFirebase from '../Functions/firebase/initFirebase'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
