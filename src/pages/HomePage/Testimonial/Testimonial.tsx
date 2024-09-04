import SectionHeadline from "@/components/SectionHeadline";
import "./Testimonial.Module.css";
const testimonials = [
  {
    name: "John Doe",
    role: "Tennis Enthusiast",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    testimonial:
      "Playbookit made it so easy to find and book a tennis court. The whole process was smooth and the court was in great condition!",
  },
  {
    name: "Sarah Lee",
    role: "Basketball Player",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    testimonial:
      "Booking a basketball court with Playbookit was quick and hassle-free. Highly recommend this service to all sports enthusiasts!",
  },
  {
    name: "Michael Smith",
    role: "Soccer Lover",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    testimonial:
      "The platform is user-friendly, and I found the perfect soccer field for my friends and me to play on the weekend.",
  },
];

const TestimonialCard = ({ name, role, image, testimonial }) => (
  // <div className="bg-black p-6 rounded-lg shadow-lg text-center">
  //   <img
  //     src={image}
  //     alt={name}
  //     className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-secondaryPink"
  //   />
  //   <h3 className="text-lg font-semibold text-primaryYellow">{name}</h3>
  //   <p className="text-sm text-gray-300">{role}</p>
  //   <p className="mt-4 text-gray-300">"{testimonial}"</p>
  // </div>
  <figure className="snip1574">
    <img src={image} alt="profile-sample2" />
    <div className="w-full h-full absolute top-0 left-0 bg-black/80"></div>
    <figcaption>
      <blockquote>
        <p className="mt-10">{testimonial}</p>
      </blockquote>
      <h3 className="text-primaryYellow">{name}</h3>
      <h5 className="text-secondaryPink">{role}</h5>
    </figcaption>
  </figure>
);

const Testimonials = () => {
  return (
    <section className="py-12 ">
      <div className="mx-auto text-center">
        <SectionHeadline>What Our Customers Say</SectionHeadline>
      </div>
      <div className="flex justify-center max-w-[1200px] mx-auto gap-4 px-4 flex-wrap items-center lg:flex-row">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
