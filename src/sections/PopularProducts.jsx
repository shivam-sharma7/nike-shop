import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
     <section id="products" className="max-container
      max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
        <h2 className="flex  text-4xl font-palanquin font-bold "><span className="text-coral-red px-2">Popular</span>Product </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience the future of footwear with the all-new Nike shoes! This revolutionary shoe combines cutting-edge technology with iconic Nike design to deliver an unparalleled level of comfort, support, and style.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
         sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}

        </div>
  
     </section>
  )
}

export default PopularProducts
