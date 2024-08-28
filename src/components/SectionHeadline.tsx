import { ReactNode } from "react";

const SectionHeadline = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <h2
        className={`${className} mt-12 mb-5 text-2xl text-center font-bold matemasie-regular text-secondaryPink lg:text-3xl`}
      >
        {children}
      </h2>
    </>
  );
};
export default SectionHeadline;
