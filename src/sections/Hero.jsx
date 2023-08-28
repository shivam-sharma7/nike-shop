import { useState } from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics, shoes  } from "../constants";
import { bigShoe1} from "../assets/images"; 
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  
  const[bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="flex flex-col gap-32 justify-center w-full min-h-screen xl:flex-row max-container">
      <div className="relative flex-col justify-center items-start pt-28 w-full xl:w-2/5 max-xl:padding-x">
        <p className="text-xl font-montserrat text-coral-red">Our Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl
         max-sm:text-[72] max-sm:leading-[82] font-bold">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap">The New arrival</span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span>Shoes
        </h1>
        <p className="mt-8 mb-10 text-lg leading-7 font-montserrat text-slate-gray sm:max-w-sm">
          Discover new stylish Nike arrivals, comfort, best quality and
          inovation for your active life.
        </p>
        <Button lable="Shop now" iconUrl={arrowRight} />

        <div className="flex flex-wrap gap-16 justify-start items-start mt-20 w-full">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-bold font-palanquin">{statistic.value}</p>
              <p className="font-bold leading-1 text-slate-gray font-palanquin">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex relative flex-1 justify-center items-center bg-center rounded-b-xl xl:min-h-screen max-xl:py-40">
        <img 
        src={bigShoeImg} // It is going to render which one is selected
        alt="shoes"
        width={610} 
        height={500}
        className="object-contain relative z-10"
         />

         <div className="flex sm:gap-6 gap-4 absolute bottom-[2%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe}>
             <ShoeCard 
             imgUrl={shoe}
             changeBigShoeImage= {(shoe) => setBigShoeImg(shoe)}
             bigShoeImg={bigShoeImg} // This will let user know which one is selected

             />
            </div>
          ))}
         </div>
      </div>
    </section>
  );
};

export default Hero;
