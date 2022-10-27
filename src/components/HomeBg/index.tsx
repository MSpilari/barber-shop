import Image from 'next/future/image'
import bg_home from '../../assets/bg_home.svg'

const HomeBg = () => (
  <div className="w-full h-[105vh] lg:h-[110vh] absolute top-0 -z-10">
    <Image
      src={bg_home}
      className="w-full h-full object-cover"
      alt="bg_home"
      sizes="33vw"
      quality={25}
    />
  </div>
)

export { HomeBg }
