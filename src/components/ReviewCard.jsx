import { star } from "../assets/icons"

 
const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img 
      src={imgURL}
      alt="customer"
      className="rounded-full object-cover w-[120px] h-[120px]" />
      <p className="mt-5 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-2 flex flex-center gap-2 items-center">
        <img 
        src={star}
        width={24}
        height={24}
        alt="star" 
        className="object-contain m-0" />
        <p className="text-slate-gray text-xl">{rating}</p>
      </div>
      <h3 className="mt-2 font-montserrat font-semibold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
