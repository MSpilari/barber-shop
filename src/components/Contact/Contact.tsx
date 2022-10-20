import Image from 'next/future/image'
import contact_1 from '../../assets/contact_1.png'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

const Contact = () => {
  const iconsList = [
    <FaFacebookF key="FaFacebookF" />,
    <FaTwitter key="FaTwitter" />,
    <FaInstagram key="FaInstagram" />,
    <FaLinkedinIn key="FaLinkedinIn" />
  ]

  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <div
        className="bg-orange-400 h-20 text-5xl mt-4 uppercase flex items-center justify-center whitespace-nowrap rotate-2 
         lg:text-8xl lg:h-24 lg:mt-6"
      >
        Contact Us
      </div>

      <div className="z-10 flex flex-col items-center justify-center lg:flex-row">
        <div className="relative w-80 h-80 flex lg:w-1/2 lg:h-[50rem]">
          <Image
            src={contact_1}
            className="w-64 h-80 absolute z-10 left-0 -top-6 lg:left-14 lg:w-[34rem] lg:h-[35rem] xl:h-[41rem] "
            alt="barber_1 Pic"
            sizes="50vw"
          />
        </div>

        <div className="w-80 h-[26rem] flex flex-col items-center gap-12 lg:w-[38rem] lg:h-[31rem]">
          <div className="w-80 h-72 flex flex-col items-center gap-10">
            <div className="w-80 h-28 flex flex-col items-center gap-5">
              <h1 className="uppercase text-2xl text-center">
                Contact Information
              </h1>

              <p className="text-sm font-Roboto text-center">
                Prototypes may also be exempted from some requirements that will
                apply to the final product
              </p>
            </div>

            <div className="w-80 h-36 flex flex-col items-center gap-6">
              <p className="text-lg font-Roboto text-center">
                7813 Cherry Hill Ave. <br /> Snohomish, Paris 98290
              </p>

              <p className="text-lg font-Roboto text-center">
                📞 +00 00 00 00 00 00
              </p>

              <p className="text-lg font-Roboto text-center">
                👋 hello@frenchbarber.fr
              </p>
            </div>
          </div>
          <ul className="w-80 h-14 flex items-center justify-center gap-6">
            {iconsList.map((icon, index) => (
              <li
                key={index}
                className="w-14 h-14 flex items-center justify-center text-xl border border-solid border-black rounded-full"
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Contact }
