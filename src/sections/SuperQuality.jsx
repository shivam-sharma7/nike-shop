import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max:lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super</span>
          <span className="text-coral-red "> Quality</span> Shoes
        </h2>
        <p className="mt-4 mb-4 lg:max-w-lg info-text">
          Explore a curated collection of the latest Nike performance gear and
          lifestyle apparel. Whether you are a dedicated athlete looking for the
          ultimate in sports equipment, or a trendsetter seeking to elevate your
          street style, we have got you covered. Our extensive range includes the
          latest running shoes engineered for speed and comfort
        </p>
        <p className="mt-6 lg:max-w-lg info-text " >Our dedication to details and exellence ensures your satisfaction</p>
        <div className="mt-11">

        <Button lable="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img 
        src={shoe8}
         alt="shoe8"
         width={560}
         height={520} 
         className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
