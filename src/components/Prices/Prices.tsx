import { RefObject, useRef } from 'react'
import { CardPrice } from './CardPrice'

const Prices = () => {
  const carouselSlider = useRef<HTMLDivElement>(null)

  const scrolling = (element: RefObject<HTMLDivElement>, btn?: string) => {
    let direction = (btn === 'start' && -288) || (btn === 'end' && 900) || 314.5

    if (element.current)
      element.current.scrollTo({ behavior: 'smooth', left: direction })
  }

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
          className="w-full flex overflow-x-hidden gap-10 px-2"
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
          <button
            onClick={() => scrolling(carouselSlider, 'start')}
            className="w-5 h-1 bg-slate-400"
          />
          <button
            onClick={() => scrolling(carouselSlider)}
            className="w-5 h-1 bg-slate-400"
          />
          <button
            onClick={() => scrolling(carouselSlider, 'end')}
            className="w-5 h-1 bg-slate-400"
          />
        </div>
      </div>
    </section>
  )
}

export { Prices }
