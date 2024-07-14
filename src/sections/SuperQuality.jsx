import { shoe8 } from "../assets/images";
import Button from "../components/Button";


const SuperQuality = () => {
  return <section id="about-us"
    className="justify-between flex items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col">
      <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
        We Provide You <span className="text-coral-red">Super</span>    <span className="text-coral-red">Quality</span> Shoes
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Whether you're looking for chic heels for a night out, versatile sneakers for everyday wear, or durable boots for the great outdoors, we have the perfect pair for every occasion. </p>
      <p className="mt-6 lg:max-w-lg info-text">Our shoes are crafted with the finest materials to ensure lasting quality and support. </p>
      <div className="mt-11"> <Button label="View Details" /></div>
    </div>
    <div className="flex-1  flex justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
    </div>
  </section>
}

export default SuperQuality;
