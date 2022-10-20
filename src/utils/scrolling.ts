import { RefObject } from 'react'

const scrolling = (element: RefObject<HTMLDivElement>, pos: number) => {
  if (element.current)
    element.current.scrollTo({ behavior: 'smooth', left: pos })
}

export { scrolling }
