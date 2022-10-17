const Products = () => {
  return (
    <section className="grid grid-rows-3 items-center justify-center lg:grid-rows-2 lg:gap-x-60">
      <h1 className="text-3xl uppercase mt-5 lg:text-6xl lg:mt-0 lg:row-start-1">
        Our Products
      </h1>

      <div className="flex items-center justify-around overflow-scroll gap-3">
        <div className="w-40 h-64 flex flex-col">
          <span>Image</span>
          <div>
            <span>Beard wax</span>
            <span>19$</span>
          </div>
        </div>

        <div className="w-40 h-64 flex flex-col">
          <span>Image</span>
          <div>
            <span>Beard wax</span>
            <span>19$</span>
          </div>
        </div>

        <div className="w-40 h-64 flex flex-col">
          <span>Image</span>
          <div>
            <span>Beard wax</span>
            <span>19$</span>
          </div>
        </div>
      </div>

      <button
        className="w-52 h-20 border border-black rounded-full 
          hover:text-orange-400 hover:border-orange-400 lg:row-start-1"
      >
        See All
      </button>
    </section>
  )
}

export { Products }
