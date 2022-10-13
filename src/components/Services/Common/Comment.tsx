type CommentTypes = {
  title: string
}

const Comment = ({ title }: CommentTypes) => {
  const [firstWord, secondWord] = title.split(' ')

  return (
    <div className="w-80 h-80 flex flex-col items-center gap-8 lg:w-96 lg:h-96 lg:gap-12 xl:items-end">
      <span className="text-3xl uppercase lg:text-6xl">
        {firstWord} <span className="text-orange-400">{secondWord}</span>
      </span>

      <p className="text-sm uppercase text-center w-80 h-40 font-Roboto lg:text-base xl:text-right">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        pariatur qui laudantium perspiciatis amet temporibus expedita, nemo
        corporis atque harum autem incidunt repudiandae doloremque tenetur.
        Corporis sit sunt recusandae quidem.
      </p>

      <button
        className="w-52 h-20 border border-black rounded-full 
          hover:text-orange-400 hover:border-orange-400"
      >
        Find out more
      </button>
    </div>
  )
}

export { Comment }
