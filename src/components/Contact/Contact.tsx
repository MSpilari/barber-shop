import Image from 'next/future/image'
import contact_1 from '../../assets/contact_1.png'
import { SectionBadge } from '../Services/Common/SectionBadge'
import { AddressPhoneEmail } from './AddressPhoneEmail'
import { SocialMediaIcons } from './SocialMediaIcons'

const Contact = () => {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <SectionBadge title="Contact Us" extraStyleDiv="bg-orange-400 rotate-2" />

      <div className="z-10 flex flex-col items-center justify-center lg:flex-row">
        <div className="relative w-80 h-80 flex lg:w-1/2 lg:h-[50rem]">
          <Image
            src={contact_1}
            className="w-64 h-80 absolute z-10 left-0 -top-6 xl:left-14 lg:w-[34rem] lg:h-[35rem] xl:h-[41rem] "
            alt="barber_1 Pic"
            sizes="50vw"
          />
        </div>

        <div className="w-80 h-[26rem] flex flex-col items-center gap-12 lg:self-start lg:mt-20 xl:w-[38rem] xl:h-[31rem]">
          <div className="w-80 h-72 flex flex-col items-center gap-10 xl:w-[38rem] xl:h-[25rem]">
            <div className="w-80 h-28 flex flex-col items-center gap-5 xl:w-[38rem] xl:h-40">
              <h1 className="uppercase text-2xl text-center lg:text-2xl xl:text-5xl">
                Contact Information
              </h1>

              <p className="text-sm font-Roboto text-center lg:text-lg">
                Prototypes may also be exempted from some requirements that will
                apply to the final product
              </p>
            </div>

            <AddressPhoneEmail />
          </div>

          <SocialMediaIcons />
        </div>
      </div>
    </section>
  )
}

export { Contact }
