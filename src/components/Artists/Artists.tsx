import Image from 'next/future/image'
import artistsPic from '../../assets/artists.png'

const Artists = () => {
  return (
    <section className="w-full h-[73rem] mb-20 flex flex-col items-center relative">
      <div className="flex flex-col items-center justify-center gap-12 w-80 h-72 z-10 lg:w-[37rem] lg:h-72 ">
        <h1 className="text-3xl uppercase text-center lg:text-6xl">
          Our Artists
        </h1>

        <p className="w-80 text-base text-center font-Roboto font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
          commodi distinctio? Qui, quos ullam! At, accusamus illo eveniet labore
          blanditiis itaque error quia accusantium. Ea ratione harum labore
          eveniet cumque!
        </p>

        <button
          className="w-52 h-20 border rounded-full text-black border-black 
        hover:text-orange-400 hover:border-orange-400"
        >
          Discover
        </button>
      </div>

      <div className="w-full absolute top-60 flex flex-col items-center justify-center">
        <div
          className="w-80 h-[55rem] relative lg:w-[35rem]
          bg-gradient-to-t from-[rgba(255,255,255,0.9)] via-transparent to-[rgba(255,255,255,0.9)]"
        >
          <Image
            className="-z-10"
            src={artistsPic}
            alt="artists Pic"
            sizes="50vw"
            fill
          />
        </div>
      </div>
    </section>
  )
}

export { Artists }
