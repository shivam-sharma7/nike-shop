import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3
        className="font-palanquin text-center
       text-4xl"
      >
        What Our
        <span className="text-coral-red"> Customer </span> Say?
      </h3>
      <p className=" info-text text-slate-gray text-center m-auto mt-3 max-w-lg">
        See our customer stories about their exceptional experience with us
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center
       max:lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL} 
          customerName={review.customerName}  
          rating={review.rating}  
          feedback={review.feedback} 
            
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
