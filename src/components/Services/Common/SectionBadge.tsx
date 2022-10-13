type SectionBadgeTypes = {
  first?: boolean
  title: string
}

const SectionBadge = ({ first, title }: SectionBadgeTypes) => {
  return (
    <div
      className={`${
        first && 'bg-orange-400'
      } h-20 text-5xl mt-4 uppercase flex items-center justify-center whitespace-nowrap -rotate-2 lg:text-8xl lg:h-24 lg:mt-6`}
    >
      {title}
    </div>
  )
}

export { SectionBadge }
