import Image from 'next/future/image'
import { useState } from 'react'
import frenchBarberLogo from '../../assets/french_barber_logo.svg'
import { DropdownMenuMobile } from './DropdownMenuMobile'
import { MenuDesktop } from './MenuDesktop'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const currentDate = new Date()
  return (
    <header
      className="flex items-center justify-between text-white mx-7 mt-8 p-0 w-80 h-8 gap-32 absolute top-0 z-10 
    lg:py-11 lg:px-24 lg:gap-24 lg:w-full lg:h-32 xl:gap-44"
    >
      <Image
        src={frenchBarberLogo}
        className="w-20 h-7 lg:w-28 lg:h-8"
        alt="French Barber logo"
      />

      {isOpen && <DropdownMenuMobile />}

      <MenuDesktop />

      <button
        className={`w-24 h-8 ${
          !isOpen && 'border-solid border border-orange-400'
        } rounded-full font-normal text-xs uppercase text-orange-400 lg:hidden`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <button
        type="button"
        className="hidden lg:flex text-orange-400 text-sm uppercase w-28"
      >
        Appointments
      </button>
    </header>
  )
}

export { Header }
