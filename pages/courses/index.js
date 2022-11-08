import Head from 'next/head'
import Image from 'next/image'
import SearchTable from '../../components/filterTable'

export default function CouresHome() {
  return (
    <div>
      <Head>
        <title>The Open Learning Initiative</title>
        <meta name="description" content="Free Courses on Math, Physics, and Computer Science." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchTable />
    </div>
  )
}
