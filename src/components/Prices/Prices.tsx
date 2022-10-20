import { useRef } from 'react'
import { CarouselButtons } from '../Carousel/CarouselButtons'
import { CardPrice } from './CardPrice'

const Prices = () => {
  const carouselSlider = useRef<HTMLDivElement>(null)

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
        <div
          ref={carouselSlider}
          className="w-full flex overflow-hidden gap-10 px-2 lg:items-center lg:justify-center lg:gap-0"
        >
          <CardPrice
            title="Hairstyle"
            price={30}
            items={[
              'Scalp analysis and massage',
              'Application of a suitable treatment',
              'Haircut',
              'Fixation'
            ]}
            extraCssDiv="lg:w-72 lg:h-[30rem] lg:rotate-[-10deg] lg:left-10 hover:z-20 xl:w-96"
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
            extraCssDiv="lg:w-80 lg:z-10 xl:w-96"
          />

          <CardPrice
            title="Beard"
            price={20}
            items={[
              'Application of a suitable treatment',
              'Beard trimming and trimming',
              'Fixation'
            ]}
            extraCssDiv="lg:w-72 lg:h-[30rem] lg:rotate-[10deg] hover:z-20 xl:w-96"
          />
        </div>

        <CarouselButtons
          slider={carouselSlider}
          startPos={-288}
          middlePos={314.5}
          endPos={900}
        />
      </div>
    </section>
  )
}

export { Prices }
