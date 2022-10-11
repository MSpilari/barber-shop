import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HomeBg } from '../components/HomeBg'
import { Services } from '../components/Services'
import { Welcome } from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeBg />
      <Header />
      <Welcome />
      <Services />
    </main>
  )
}

export default Home
