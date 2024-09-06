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
  <div>
    <div className="flex flex-col items-center gap-3 border border-gray-300 rounded-md p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>

      <p className="max-w-96 text-center">"{testimonial}"</p>
      <div className="flex items-center gap-3">
        <img className="size-10 object-cover rounded-full" src={image} alt="" />
        <p className="name text-secondaryPink">{name}</p>
      </div>

      <span className="text-sm -mt-1 text-primaryYellow bg-black px-2 rounded-xl">
        {role}
      </span>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="mt-24 mb-32">
      <div className="mx-auto text-center">
        <SectionHeadline>What Our Customers Say</SectionHeadline>
      </div>

      <div className="flex mt-10 justify-center mx-auto gap-8 px-4 flex-wrap items-center md:flex-row">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
