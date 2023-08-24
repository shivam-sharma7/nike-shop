 
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-12 py-16">
      <div className="flex w-12 h-12 justify-center items-center
       bg-coral-red rounded-full">
        <img 
        src={imgURL}
        alt={label}
        width={24}
        height={24}
        />
      </div>
      
      <p className="mt-5 leading-normal text-2xl font-bold font-palanquin ">{label}</p>
      <p className="mt-2 text-slate-gray leading-normal font-montserrat break-words ">{subtext}</p>
    </div>
  )
}

export default ServiceCard
