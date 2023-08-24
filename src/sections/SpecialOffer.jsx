import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center
     max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img src={offer} alt="offer-img" width={765} height={683} />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special </span>Offer
        </h2>
        <p className="mt-4 mb-4 lg:max-w-lg info-text">
          Get ready to embark on a shopping journey like no other, where your
          budget stretches farther and your desires are met with incredible
          discounts. Our Offers event is here to elevate your shopping
          experience, bringing you exclusive deals that make your favorite
          products more accessible than ever.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Do not miss out on this limited-time opportunity to revamp your
          lifestyle while keeping your budget intact. Whether you are treating
          yourself, finding gifts for special occasions, or simply seizing the
          chance to snag that item you had your eye on, our Offers event is
          your gateway to a world of affordability and abundance
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button lable="Shop now" iconUrl={arrowRight} />
          <Button
           lable="Learn more" 
           backgroundColor="bg-white"
           borderColor="border-slate-gray"
           textColor="text-slate-gray"
           />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
