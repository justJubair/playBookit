import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionHeadline from "@/components/SectionHeadline";

// Offer Data
const offers = [
  {
    title: "Early Bird Discount",
    description: "Book your facility before 10 AM and get 15% off!",
    img: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg",
  },
  {
    title: "Group Booking Offer",
    description: "Book for 5 or more friends and enjoy 20% discount.",
    img: "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg",
  },
  {
    title: "Weekend Special",
    description: "Get 25% off on all weekend bookings.",
    img: "https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg",
  },
  {
    title: "Holiday Discount",
    description: "Special holiday discounts! Book during holidays for 30% off.",
    img: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg",
  },
];

const SpecialOffers = () => {
  return (
    <div className="mb-28 mt-28 px-8 bg-gradient-to-r from-primaryYellow/20 to-secondaryPink/20 py-10  text-white">
      <SectionHeadline className="-mt-0 mb-7">
        Special Offers & Discounts
      </SectionHeadline>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-800 h-36 rounded-xl p-4 overflow-hidden transition-transform duration-500 hover:scale-105">
              <img
                src={offer.img}
                alt={offer.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-xl"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-sm">{offer.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
