import Image from 'next/image'
import { Inter } from 'next/font/google'
import { DEFAULT_MAX_VERSION } from 'tls'
import Board from '../containers/Board'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      
      <main >
        <Board/>
      </main>
    </div>
  )
}
