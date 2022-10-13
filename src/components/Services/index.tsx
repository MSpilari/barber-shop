import Image from 'next/future/image'
import barber_1 from '../../assets/barber_1.png'
import barber_2 from '../../assets/barber_2.png'

const Services = () => {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <div
        className="bg-orange-400 h-20 text-5xl mt-4 uppercase flex items-center justify-center whitespace-nowrap -rotate-2
      lg:text-8xl lg:h-24 lg:mt-6"
      >
        Shave & Cut
      </div>

      <div className="z-10 flex flex-col items-center justify-center lg:flex-row-reverse">
        <div className="relative w-80 h-80 flex lg:w-1/2 lg:h-[50rem]">
          <Image
            src={barber_1}
            className="w-40 h-40 absolute z-10 left-0 top-24 lg:w-80 lg:h-80 lg:-left-40 xl:left-0 lg:top-64"
            alt="barber_1 Pic"
            sizes="50vw"
          />

          <Image
            src={barber_2}
            className="w-60 absolute right-0 -top-5 lg:w-[33.75rem] lg:-top-7"
            alt="barber_2 Pic"
            sizes="50vw"
          />
        </div>

        <div className="lg:w-96 lg:h-96">
          <span className="text-3xl">
            The <span className="text-orange-400">Beard</span>
          </span>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            pariatur qui laudantium perspiciatis amet temporibus expedita, nemo
            corporis atque harum autem incidunt repudiandae doloremque tenetur.
            Corporis sit sunt recusandae quidem.
          </p>

          <button>Find out more.</button>
        </div>
      </div>
    </section>
  )
}

export { Services }
