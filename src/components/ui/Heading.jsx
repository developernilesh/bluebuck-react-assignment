import React from "react";

const Heading = ({ children, className }) => {
  return (
    <h3 className={`text-[48px] font-semibold text-[#430C41] ${className}`}>
      {children}
    </h3>
  );
};

export default Heading;
