import { Mail, Phone, MapPin } from "lucide-react";
import userCardImg from "../../../assets/images/userCard.png";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUserDetails } from "@/redux/feature/auth/authSlice";
import { TUserDetails } from "@/types";
const UserProfileCard = () => {
  const user: TUserDetails | null = useAppSelector(selectCurrentUserDetails);
  // console.log(user);
  return (
    <div className="flex items-center justify-between border border-primaryYellow bg-secondaryPink/20 shadow-lg rounded-lg overflow-hidden py-5 px-5 m-4">
      <div>
        <h1 className="text-4xl font-semibold matemasie-regular">
          Welcome back, <span className="text-secondaryPink">{user?.name}</span>
        </h1>
      </div>
      <div className="flex items-center">
        <div className="flex items-center flex-col justify-center">
          <img
            className="size-28 rounded-full"
            src={userCardImg}
            alt="User profile"
          />
          <div className="mt-2">
            {/* <p className="text-xl font-bold text-gray-900">{user?.name}</p> */}
            <p className="text-sm text-gray-600 font-bold">{user?.role}</p>
          </div>
        </div>
        <div className="text-sm border-t border-gray-200">
          <div className="flex items-center mb-2">
            <Mail className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{user?.email}</span>
          </div>
          <div className="flex items-center mb-2">
            <Phone className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{user?.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{user?.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
