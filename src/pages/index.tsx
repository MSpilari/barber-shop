import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HomeBg } from '../components/HomeBg'
import { BeardService } from '../components/Services/Beard'
import { SkinService } from '../components/Services/Skin'
import { Welcome } from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeBg />
      <Header />
      <Welcome />
      <BeardService />
      <SkinService />
    </main>
  )
}

export default Home
