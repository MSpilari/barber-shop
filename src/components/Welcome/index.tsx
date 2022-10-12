const Welcome = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-12 mt-24 w-80 h-[calc(100vh_-_6rem)] 
    lg:mt-40 lg:w-[31rem] lg:h-[calc(100vh_-_10rem)]"
    >
      <span className="text-white font-normal font-Roboto text-center text-xs lg:text-base">
        Since 1989
      </span>

      <span className="text-white font-normal text-center text-3xl uppercase lg:text-6xl">
        The <span className="text-orange-400">Man`s</span> Lounge
      </span>

      <span className="text-white font-normal font-Roboto text-center text-xs lg:text-base">
        A desire to trim your beard, refresh your haircut and get pampered? This
        is the ideal place.
      </span>

      <button className="w-52 h-20 border rounded-full text-white hover:text-orange-400 hover:border-orange-400">
        See everything
      </button>
    </div>
  )
}

export { Welcome }
