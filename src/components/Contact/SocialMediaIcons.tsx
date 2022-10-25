import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa'

const SocialMediaIcons = () => {
  const iconsList = [
    <FaFacebookF key="FaFacebookF" />,
    <FaTwitter key="FaTwitter" />,
    <FaInstagram key="FaInstagram" />,
    <FaLinkedinIn key="FaLinkedinIn" />
  ]

  return (
    <ul className="w-80 h-14 flex items-center justify-center gap-6">
      {iconsList.map((icon, index) => (
        <li
          key={index}
          className="w-14 h-14 flex items-center justify-center text-xl border border-solid border-black rounded-full
          hover:text-orange-400 hover:border-orange-400"
        >
          <button className="w-full h-full flex items-center justify-center">
            {icon}
          </button>
        </li>
      ))}
    </ul>
  )
}

export { SocialMediaIcons }
