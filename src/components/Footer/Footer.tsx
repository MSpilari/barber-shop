import Image from 'next/future/image'
import Logo from '../../assets/french_barber_logo.svg'
import { Acordeon } from './Acordeon'

const Footer = () => {
  const currentDate = new Date()

  return (
    <footer
      className="w-full h-[26rem] flex flex-col items-start bg-black text-white relative overflow-hidden 
    lg:grid lg:grid-cols-2  lg:items-center lg:px-48 lg:py-6 xl:px-64 xl:py-10"
    >
      <div className="flex flex-col items-center gap-7 p-7 lg:items-start">
        <Image className="w-32 h-10" src={Logo} alt="French Barber Logo" />

        <p className="text-sm text-center font-Roboto lg:text-start">
          The streetstyle and trendy atmosphere, combined with the elegance and
          know-how of Paris, create a chic and warm concept.
        </p>
      </div>

      <div className="flex flex-col items-start py-7 gap-6 w-full lg:flex-row">
        <Acordeon
          title="The Shop"
          options={[
            'Our Services',
            'Our Products',
            'Our Prices',
            'Our Lounges'
          ]}
        />

        <Acordeon
          title="Information"
          options={['Join Us', 'Instagram', 'Facebook', 'Twitter']}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center py-4 px-7 absolute bottom-0">
        <p className="text-xs text-center">
          ₢ {currentDate.getFullYear()} The French Barber
        </p>
      </div>
    </footer>
  )
}

export { Footer }
