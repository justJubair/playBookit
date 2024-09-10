import CustomButton from "@/components/CustomButton";
import { Link } from "react-router-dom";

type TFacilityProps = {
  facility: {
    _id: string;
    name: string;
    img: string;
    description: string;
  };
};

const FacilityCard = ({ facility }: TFacilityProps) => {
  return (
    <div>
      <div className="card bg-secondaryPink sm:w-96 h-64 md:w-80 md:h-80 lg:w-96 lg:h-80 image-full shadow-xl">
        <figure>
          <img
            className="w-full h-full object-cover"
            src={facility?.img}
            alt={facility?.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{facility?.name}</h2>
          <p>{facility?.description}</p>
          <Link
            to={`/facility/${facility._id}`}
            className="card-actions justify-end"
          >
            <CustomButton>Details</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FacilityCard;
