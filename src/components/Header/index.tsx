import Image from 'next/future/image'
import { useState } from 'react'
import frenchBarberLogo from '../../assets/french_barber_logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="flex items-center justify-between text-white mx-7 mt-8 p-0 w-80 h-8 gap-32 absolute top-0 
    lg:py-11 lg:px-24 lg:gap-44 lg:w-full lg:h-32"
    >
      <Image
        src={frenchBarberLogo}
        className="w-20 h-7 lg:w-28 lg:h-8"
        alt="French Barber logo"
      />

      {isOpen && (
        <ul className="w-80 h-80 flex flex-col items-center p-0 gap-12 absolute top-28 text-2xl uppercase lg:hidden">
          <li>Our Services</li>
          <li>Our Products</li>
          <li>Our Prices</li>
          <li>Our Lounges</li>
          <li className="text-orange-400">Appointments</li>
        </ul>
      )}

      <ul className="hidden lg:flex lg:items-start lg:gap-8 lg:text-sm lg:uppercase">
        <li>Our Services</li>
        <li>Our Products</li>
        <li>Our Prices</li>
        <li>Our Lounges</li>
      </ul>

      <button
        className={`w-24 h-8 ${
          !isOpen && 'border-solid border border-orange-400'
        } rounded-full font-normal text-xs uppercase text-orange-400 lg:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <button className="hidden lg:flex text-orange-400 text-sm uppercase">
        Appointments
      </button>
    </header>
  )
}

export { Header }
