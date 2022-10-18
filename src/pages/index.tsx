import type { NextPage } from 'next'
import { Artists } from '../components/Artists/Artists'
import { Header } from '../components/Header'
import { HomeBg } from '../components/HomeBg'
import { Products } from '../components/Products/Products'
import { Quote } from '../components/Quote/Quote'
import { BeardService } from '../components/Services/Beard'
import { Hairstyle } from '../components/Services/Hairstyle'
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
      <Hairstyle />
      <Products />
      <Quote />
      <Artists />
    </main>
  )
}

export default Home
