import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Whether you're looking for chic heels for a night out, versatile
          sneakers for everyday wear, or durable boots for the great outdoors,
          we have the perfect pair for every occasion.{" "}
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our shoes are crafted with the finest materials to ensure lasting
          quality and support.{" "}
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {" "}
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="learn more"
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
