import Head from 'next/head'
import Image from 'next/image'
import SearchTable from '../components/filterTable'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Open Learning Initiative</title>
        <meta name="description" content="Free Courses on Math, Physics, and Computer Science." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>
    </div>
  )
}
