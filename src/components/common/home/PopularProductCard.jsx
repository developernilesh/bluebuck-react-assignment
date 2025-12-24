import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { IoIosHeart } from "react-icons/io";
import CustomButton from "../../ui/CustomButton";
import { useNavigate } from "react-router-dom";

const PopularProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full bg-white rounded-3xl shadow-lg overflow-hidden border cursor-pointer"
      onClick={() => navigate("/product-details")}
    >
      <div className="relative bg-[#f7e4b2]">
        <span className="absolute top-3 right-3 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.discountPercentage}% OFF
        </span>

        <img
          src={product.image}
          alt={product.productName}
          className="mx-auto w-full object-contain"
        />
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-[#430C41] font-extrabold text-lg uppercase">
          {product.productName.toUpperCase()}
        </h2>

        <p className="font-semibold text-[#484548]">
          Net Quantity: {product.netQty}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-sm text-[#484548]">
          <div className="flex gap-1 items-center font-medium">
            <FaStar className="w-[14px] h-[14px] text-red-500 fill-red-500" />
            <span>{product.avgRating}</span>
            <span>({product.reviews})&nbsp;&#8226;</span>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineUser />
            <span>{parseInt(product.purchases) / 1000}k Purchases</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            Rs. {product.currentPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            Rs. {product.originalPrice}
          </span>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button className="w-16 h-12 flex items-center justify-center rounded-full bg-[#F9C255]">
            {product.addedToCart ? (
              <IoIosHeart className="w-6 h-6 text-[#6D246A]" />
            ) : (
              <GoHeart className="w-6 h-6 text-[#6D246A]" />
            )}
          </button>

          <CustomButton type="secondary" width="full">
            Add to Cart
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
