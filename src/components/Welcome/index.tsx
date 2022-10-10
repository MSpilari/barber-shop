const Welcome = () => {
  return (
    <div className="bg-home bg-no-repeat bg-cover w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-12 mt-24 w-80">
        <span className="text-white font-normal font-Roboto text-center text-xs">
          Since 1989
        </span>

        <span className="text-white font-normal text-center text-3xl uppercase">
          The <span className="text-orange-400">Man`s</span> Lounge
        </span>

        <span className="text-white font-normal font-Roboto text-center text-base">
          A desire to trim your beard, refresh your haircut and get pampered?
          This is the ideal place.
        </span>

        <button className="w-52 h-20 border rounded-full text-white">
          See everything
        </button>
      </div>
    </div>
  )
}

export { Welcome }
