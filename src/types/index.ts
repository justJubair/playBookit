export type TUser = {
  userEmail: string;
  userRole: string;
};

export type TUserDetails = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
};

export type TFacility = {
  _id: string;
  name: string;
  img: string;
  description: string;
  pricePerHour: number;
  location: string;
};
