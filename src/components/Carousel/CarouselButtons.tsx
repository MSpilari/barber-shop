import { RefObject } from 'react'
import { scrolling } from '../../utils/scrolling'

type CarouselButtonsTypes = {
  slider: RefObject<HTMLDivElement>
  startPos: number
  middlePos: number
  endPos: number
}

const CarouselButtons = ({
  slider,
  startPos,
  middlePos,
  endPos
}: CarouselButtonsTypes) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4 lg:hidden">
      <button
        onClick={() => scrolling(slider, startPos)}
        className="w-5 h-1 bg-slate-400"
      />
      <button
        onClick={() => scrolling(slider, middlePos)}
        className="w-5 h-1 bg-slate-400"
      />
      <button
        onClick={() => scrolling(slider, endPos)}
        className="w-5 h-1 bg-slate-400"
      />
    </div>
  )
}

export { CarouselButtons }
