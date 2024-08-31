import { ReactNode } from "react";
import { Button } from "./ui/button";

const CustomButton = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}) => {
  return (
    <Button
      type={type}
      className={`${className} bg-secondaryPink hover:text-secondaryPink hover:bg-white`}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
