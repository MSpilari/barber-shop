import prod_1 from '../../assets/catalog-product-01.png'
import prod_2 from '../../assets/catalog-product-02.png'
import prod_3 from '../../assets/catalog-product-03.png'
import { ProductCard } from './ProductCard'

const Products = () => {
  const products = [
    { image: prod_1, name: 'Grooming Oil', price: 17 },
    { image: prod_2, name: 'Beard Brush', price: 7 },
    { image: prod_3, name: 'Beard Wax', price: 19 }
  ]

  return (
    <section className="grid h-[35rem] grid-rows-3 grid-cols-1 items-center justify-center lg:grid-rows-2 lg:h-[45rem] lg:mb-36">
      <h1 className="text-3xl uppercase text-center mt-5 lg:text-6xl lg:mt-0 lg:row-start-1 lg:text-start">
        Our Products
      </h1>

      <div className="col-span-2 flex items-center justify-center  gap-3">
        {products.map(product => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

      <button
        className="w-52 h-20 justify-self-center border border-black rounded-full 
          hover:text-orange-400 hover:border-orange-400 lg:row-start-1 "
      >
        See All
      </button>
    </section>
  )
}

export { Products }
