 
const Button = ({lable, iconUrl}) => {
  return (
     <button className="flex
      justify-center item-center gap-2
      px-7 py-4 border leading-none font-montserrat
      text-lg bg-coral-red text-white rounded-full">
        {lable}

       {iconUrl && <img
         src={iconUrl}
         alt="icon"
         className="ml-2 rounded-full w-5 h-5"
         /> }
     </button>
  )
}

export default Button
