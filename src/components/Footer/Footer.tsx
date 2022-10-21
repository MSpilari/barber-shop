import Image from 'next/future/image'
import Logo from '../../assets/french_barber_logo.svg'

const Footer = () => {
  const currentDate = new Date()
  return (
    <footer className="w-full h-[26rem] flex flex-col items-start bg-black text-white relative">
      <div className="flex flex-col items-center gap-7 p-7">
        <Image className="w-32 h-10" src={Logo} alt="French Barber Logo" />

        <p className="text-sm text-center font-Roboto">
          The streetstyle and trendy atmosphere, combined with the elegance and
          know-how of Paris, create a chic and warm concept.
        </p>
      </div>

      <div>The Shop - Acordeon Information</div>

      <div className="w-full flex flex-col items-center justify-center py-4 px-7 absolute bottom-0">
        <p className="text-xs text-center">
          ₢ {currentDate.getFullYear()} The French Barber
        </p>
      </div>
    </footer>
  )
}

export { Footer }
