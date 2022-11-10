import Navbar from '../components/Navbar'
import initFirebase from '../Functions/firebase/initFirebase'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
    <div>
        <Navbar />
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
