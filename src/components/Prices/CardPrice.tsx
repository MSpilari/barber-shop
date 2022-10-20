type CardPriceTypes = {
  title: string
  price: number
  items: string[]
  extraCssDiv?: string
}

const CardPrice = ({ title, price, items, extraCssDiv }: CardPriceTypes) => {
  return (
    <div
      className={`flex flex-col bg-white items-center justify-center px-5 py-8 gap-10 w-72 h-[35rem] 
    border-2 border-solid border-black rounded-xl ${extraCssDiv}`}
    >
      <div className="flex flex-col items-center gap-4 w-60 h-72">
        <h3 className="text-lg uppercase text-center h-6 lg:text-xl">
          {title}
        </h3>

        <p className="text-xs text-center h-12 font-Roboto lg:text-sm">
          An add-on is a set of premium features that you can add to your Forma
        </p>

        <span className="text-xs text-center font-Roboto text-slate-400">
          From:
        </span>

        <span className="text-2xl text-center text-orange-400">{price}$</span>

        <button
          className="w-52 h-20 border rounded-full text-black border-black 
          hover:text-orange-400 hover:border-orange-400"
        >
          Make an appointment
        </button>
      </div>

      <ul className=" flex flex-col items-start gap-4 w-60 h-44">
        {items.map(item => (
          <li className="text-xs flex gap-3" key={item}>
            🗸 {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { CardPrice }
