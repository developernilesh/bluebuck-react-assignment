import React from "react";
import { homePageProductCategories } from "../../../data/data";

const ProductCategory = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1108px] mx-auto px-5 pt-8 flex flex-wrap justify-between items-center gap-2">
        {homePageProductCategories.map((category, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <div
              className={`w-[76px] h-[76px] ${category.background} border ${category.borderColor} rounded-full flex justify-center items-center`}
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-[42px]"
              />
            </div>
            <div className="text-[#6D246A] font-extrabold">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
