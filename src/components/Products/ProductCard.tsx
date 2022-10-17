import Image, { StaticImageData } from 'next/future/image'

type ProductCardTypes = {
  name: string
  image: string | StaticImageData
  price: number
}

const ProductCard = ({ name, image, price }: ProductCardTypes) => {
  return (
    <div className="w-40 h-64 flex flex-col bg-white rounded-xl overflow-hidden lg:w-96 lg:h-[37.5rem]">
      <Image
        src={image}
        alt="Grooming Oil"
        className="w-40 h-56 lg:w-96 lg:h-[37.5rem]"
      />

      <div className="flex items-center justify-between mx-4">
        <span className="text-xs uppercase truncate ml-4">{name}</span>

        <span className="text-xs uppercase text-orange-400">{price}$</span>
      </div>
    </div>
  )
}

export { ProductCard }
