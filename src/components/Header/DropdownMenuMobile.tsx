const DropdownMenuMobile = () => {
  const currentDate = new Date()

  return (
    <ul
      className="w-80 h-[calc(100vh_-_2.25rem)] flex flex-col items-center justify-center p-0 gap-12 rounded absolute top-9 bg-black
        lg:hidden"
    >
      <li>
        <button className="text-2xl uppercase">Our Services</button>
      </li>
      <li>
        <button className="text-2xl uppercase">Our Products</button>
      </li>
      <li>
        <button className="text-2xl uppercase">Our Prices</button>
      </li>
      <li>
        <button className="text-2xl uppercase">Our Lounges</button>
      </li>
      <li className="text-orange-400">
        <button className="text-2xl uppercase">Appointments</button>
      </li>
      <li className="flex flex-col text-xs text-center ">
        ₢ {currentDate.getFullYear()} The French Barber
      </li>
    </ul>
  )
}

export { DropdownMenuMobile }
