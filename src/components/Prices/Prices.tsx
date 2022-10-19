import { CardPrice } from './CardPrice'

const Prices = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-[52rem] gap-24">
      <div className="flex flex-col items-center w-80 h-36 gap-12">
        <h1 className="text-3xl uppercase items-center h-7">Our Prices</h1>

        <p className="text-base font-Roboto items-center w-80 h-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          placeat fugit vel nisi, qui error id accusantium esse at. Repudiandae,
          tenetur harum cumque consequatur repellat aperiam maiores iste.
          Numquam, corrupti.
        </p>
      </div>

      <div className="w-full h-[38rem]">
        <div className="w-full flex overflow-x-scroll">
          <CardPrice
            title="Hairstyle"
            price={30}
            items={[
              'Scalp analysis and massage',
              'Application of a suitable treatment',
              'Haircut',
              'Fixation'
            ]}
          />

          <CardPrice
            title="Hairstyle And Beard"
            price={45}
            items={[
              'Scalp analysis and massage',
              'Application of a suitable treatment',
              'Haircut',
              'Beard trimming and trimming',
              'Fixation'
            ]}
          />

          <CardPrice
            title="Beard"
            price={20}
            items={[
              'Application of a suitable treatment',
              'Beard trimming and trimming',
              'Fixation'
            ]}
          />
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="w-5 h-1 bg-slate-400"></button>
          <button className="w-5 h-1 bg-slate-400"></button>
          <button className="w-5 h-1 bg-slate-400"></button>
        </div>
      </div>
    </section>
  )
}

export { Prices }
