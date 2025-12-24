import React from "react";

const CustomButton = ({ children, type = "primary", width = "" }) => {
  return (
    <button
      className={`${width === "full" ? "w-full" : "w-fit"} ${
        type === "primary"
          ? "bg-[#F9C255] text-[#484548]"
          : type === "secondary"
          ? "bg-[#6D246A] text-white"
          : ""
      } font-semibold px-7 py-[10px] rounded-[50px]`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
