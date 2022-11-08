import Head from 'next/head'
import Image from 'next/image'
import SearchTable from '../../components/filterTable'

export default function CouresHome() {
  return (
    <div>
      <Head>
        <title>Courses @ The Open Learning Initiative</title>
        <meta name="description" content="Free Courses on Math, Physics, and Computer Science." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=' w-3/4 mx-auto '>
        <SearchTable />
      </div>
 
    </div>
  )
}
