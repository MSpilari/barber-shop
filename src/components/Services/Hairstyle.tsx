import Image from 'next/future/image'
import { Comment } from './Common/Comment'
import { SectionBadge } from './Common/SectionBadge'
import cut_1 from '../../assets/cut_1.png'
import cut_2 from '../../assets/cut_2.png'

const Hairstyle = () => {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <SectionBadge title="Hairstyle & Color" extraStyleDiv="-rotate-2" />

      <div className="z-10 flex flex-col items-center justify-center lg:flex-row-reverse">
        <div className="relative w-80 h-80 flex lg:w-1/2 lg:h-[50rem]">
          <Image
            src={cut_1}
            className="w-20 h-52 absolute z-10 left-14 top-16 lg:w-44 lg:h-[26.25rem] lg:-left-10 lg:top-32 xl:left-24"
            alt="cut_1 Pic"
            sizes="50vw"
          />

          <Image
            src={cut_2}
            className="w-60 absolute right-0 -top-5 lg:w-[33.75rem] lg:-top-7"
            alt="cut_2 Pic"
            sizes="50vw"
          />
        </div>

        <Comment title="A Hair" />
      </div>
    </section>
  )
}

export { Hairstyle }
