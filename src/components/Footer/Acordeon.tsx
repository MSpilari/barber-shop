import { useState } from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

type AcordeonProps = {
  title: string
  options: string[]
}

const Acordeon = ({ title, options }: AcordeonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col w-full px-7 py-1 relative">
      <span className="flex items-center justify-between text-sm">
        {title}

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiUpArrow /> : <BiDownArrow />}
        </button>
      </span>

      {isOpen && (
        <ul className="flex flex-col w-full h-24 gap-2 bg-black absolute z-10 top-8">
          {options.map(opt => (
            <li className="text-xs" key={opt}>
              {opt}
            </li>
          ))}
        </ul>
      )}

      <ul className="hidden lg:flex flex-col w-full h-24 gap-4">
        {options.map(opt => (
          <li className="text-xs" key={opt}>
            {opt}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Acordeon }
