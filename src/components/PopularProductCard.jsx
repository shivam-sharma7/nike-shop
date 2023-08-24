import { star } from "../assets/icons"

 
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
       src={imgURL}
       alt={name}
       className="w-[280px] h-[280px]"/>

       <div className="mt-5 px-11 flex justify-start gap-2.5">
        <img 
        src={star}
        alt="starIcon"
        width={23}
        height={23} />
        <p className="text-slate-gray">(4.5)</p>
       </div>
       <h3 className="text-xl font-palanquin font-bold leading-normal ">{name}</h3>
       <h3 className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">{price}</h3>
    </div>
    
  )
}

export default PopularProductCard
