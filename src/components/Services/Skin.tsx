import Image from 'next/future/image'
import skin_1 from '../../assets/Skin_1.png'
import skin_2 from '../../assets/skin_2.png'
import { Comment } from './Common/Comment'
import { SectionBadge } from './Common/SectionBadge'

const SkinService = () => {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <SectionBadge title="Skin Care" extraStyleDiv="rotate-2" />

      <div className="z-10 flex flex-col items-center justify-center lg:flex-row-reverse lg:relative lg:h-[50rem]">
        <div className="relative w-80 h-80 flex lg:static">
          <Image
            src={skin_1}
            className="w-16 h-32 absolute z-10 right-12 top-24 lg:w-36 lg:h-80 lg:right-0 lg:z-0 xl:right-40"
            alt="skin_1 Pic"
            sizes="50vw"
          />

          <Image
            src={skin_2}
            className="w-60 absolute left-0 -top-5 lg:w-[33.75rem] lg:-top-7 xl:left-40"
            alt="skin_2 Pic"
            sizes="50vw"
          />
        </div>

        <Comment
          extraStylesDiv="lg:absolute lg:left-[35rem] xl:left-[40rem]"
          title="The Skin"
        />
      </div>
    </section>
  )
}

export { SkinService }
