import React from "react";

const Heading2 = ({ children, className }) => {
  return (
    <h3 className={`text-[32px] font-bold text-[#430C41] ${className}`}>
      {children}
    </h3>
  );
};

export default Heading2;
