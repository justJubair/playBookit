import { ReactNode } from "react";
import { Button } from "./ui/button";

const CustomButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
      className={`${className} bg-secondaryPink hover:text-secondaryPink hover:bg-white`}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
