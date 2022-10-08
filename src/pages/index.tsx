import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Welcome } from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <Welcome />
      <Header />
    </main>
  )
}

export default Home
