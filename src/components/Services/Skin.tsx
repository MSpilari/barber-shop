import Image from 'next/future/image'
import skin_1 from '../../assets/Skin_1.png'
import skin_2 from '../../assets/skin_2.png'
import { Comment } from './Common/Comment'
import { SectionBadge } from './Common/SectionBadge'

const SkinService = () => {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <SectionBadge title="Skin Care" />

      <div className="z-10 flex flex-col items-center justify-center lg:flex-row-reverse">
        <div className="relative w-80 h-80 flex lg:w-1/2 lg:h-[50rem]">
          <Image
            src={skin_1}
            className="w-40 h-40 absolute z-10 left-0 top-24 lg:w-80 lg:h-80 lg:-left-40 xl:left-0 lg:top-64"
            alt="skin_1 Pic"
            sizes="50vw"
          />

          <Image
            src={skin_2}
            className="w-60 absolute right-0 -top-5 lg:w-[33.75rem] lg:-top-7"
            alt="skin_2 Pic"
            sizes="50vw"
          />
        </div>

        <Comment title="The Skin" />
      </div>
    </section>
  )
}

export { SkinService }
