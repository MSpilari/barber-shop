import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HomeBg } from '../components/HomeBg'
import { Welcome } from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <HomeBg />
      <Header />
      <Welcome />
    </main>
  )
}

export default Home
