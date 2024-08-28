import CustomButton from "@/components/CustomButton";

type TFacilityProps = {
  facility: {
    name: string;
    img: string;
    description: string;
  };
};

const FacilityCard = ({ facility }: TFacilityProps) => {
  return (
    <div>
      <div className="card bg-base-100 lg:w-96 lg:h-80 image-full shadow-xl">
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
          <div className="card-actions justify-end">
            <CustomButton>Details</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FacilityCard;
