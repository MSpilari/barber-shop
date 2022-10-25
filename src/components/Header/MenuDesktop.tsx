const MenuDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-start lg:gap-8">
      <li>
        <button className="text-sm uppercase hover:text-orange-400">
          Our Services
        </button>
      </li>
      <li>
        <button className="text-sm uppercase hover:text-orange-400">
          Our Products
        </button>
      </li>
      <li>
        <button className="text-sm uppercase hover:text-orange-400">
          Our Prices
        </button>
      </li>
      <li>
        <button className="text-sm uppercase hover:text-orange-400">
          Our Lounges
        </button>
      </li>
    </ul>
  )
}

export { MenuDesktop }
