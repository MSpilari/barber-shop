import Image from 'next/future/image'
import frenchBarberLogo from '../../assets/french_barber_logo.svg'

const Header = () => {
  return (
    <header
      className="flex items-center justify-between text-white mx-7 mt-8 p-0 w-80 h-8 gap-32 absolute top-0 
    lg:py-11 lg:px-24 lg:gap-44 lg:w-full lg:h-32 lg:m-0"
    >
      <Image
        src={frenchBarberLogo}
        className="w-20 h-7"
        alt="French Barber logo"
      />

      <ul className="hidden lg:flex">
        <li>Our Services</li>
        <li>Our Products</li>
        <li>Our Prices</li>
        <li>Our Lounges</li>
      </ul>

      <button className="w-24 h-8 border-solid border border-orange-400 rounded-full font-normal text-xs uppercase text-orange-400">
        Menu
      </button>
    </header>
  )
}

export { Header }
