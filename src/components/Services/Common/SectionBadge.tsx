type SectionBadgeTypes = {
  title: string
  extraStyleDiv?: string
}

const SectionBadge = ({ title, extraStyleDiv }: SectionBadgeTypes) => {
  return (
    <div
      className={`h-20 text-5xl mt-4 uppercase flex items-center justify-center whitespace-nowrap lg:text-8xl lg:h-24 lg:mt-6 ${extraStyleDiv}`}
    >
      {title}
    </div>
  )
}

export { SectionBadge }
