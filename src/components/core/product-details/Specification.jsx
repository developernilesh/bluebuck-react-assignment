import { useState } from "react";
import Heading2 from "../../ui/Heading2";
import { FaStar } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import CustomButton from "../../ui/CustomButton";
import { BsCartDash } from "react-icons/bs";
import { productProperties } from "../../../data/data";

const images = [
  { id: 1, img: "JeeraShakti.png" },
  { id: 2, img: "Aswasila.png" },
  { id: 3, img: "Provita.png" },
  { id: 4, img: "Neurobon.png" },
  { id: 5, img: "Shaktibilas.png" },
];

const packOptions = [
  {
    id: "100g",
    label: "100G",
    image: "JeeraShakti.png",
    discount: "10% OFF",
  },
  {
    id: "200g",
    label: "200G",
    image: "Shaktibilas.png",
    discount: "18% OFF",
  },
];

const Specification = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [packSize, setPackSize] = useState("100g");

  return (
    <div className="w-full space-y-16">
      {/* product info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: IMAGE GALLERY */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl flex justify-center items-center">
            <img
              src={selectedImage.img}
              alt="Product"
              className="w-full max-w-xl object-cover rounded-3xl"
            />
          </div>

          {/* Thumbnails */}
          <div className="w-full max-w-xl mx-auto grid grid-cols-5 gap-3">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-lg p-1 transition
                  ${
                    selectedImage.id === img.id
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
              >
                <img
                  src={img.img}
                  alt="Thumbnail"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT DETAILS */}
        <div className="space-y-4">
          <Heading2>JEERA SHAKTI POWDER</Heading2>

          {/* price and rating */}
          <div className="space-y-2">
            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-black">Rs. 604</span>
              <span className="line-through text-xl text-gray-500">₹711</span>
              <span className="bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white text-xs font-semibold px-3 py-1 rounded-full">
                50% OFF
              </span>
            </div>

            <p className="text-[#484548]">MRP Incl. of all taxes</p>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-2 text-lg text-[#484548]">
              <div className="flex gap-1 items-center font-medium">
                <FaStar className="w-[14px] h-[14px] text-red-500 fill-red-500" />
                <span>4.4</span>
                <span>(400)&nbsp;&#8226;</span>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineUser />
                <span>1.4k Purchases</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#484548]">
            A traditional Ayurvedic digestive medicine uses natural ingredients
            to&nbsp;
            <span className="font-semibold">
              enhance digestion, balance digestive acids, and relieve bloating
              and indigestion.
            </span>
          </p>

          <div className="text-[#484548] font-semibold text-lg">
            Net Quantity: {packSize}
          </div>

          {/* Pack Size */}
          <div className="space-y-4">
            <div className="text-lg font-bold text-[#6D246A] uppercase">
              Pack Size
            </div>

            <div className="flex gap-4">
              {packOptions.map((pack) => {
                const isActive = packSize === pack.id;

                return (
                  <button
                    key={pack.id}
                    onClick={() => setPackSize(pack.id)}
                    className={`relative w-32 rounded-xl p-3 transition-all border-[#F9C255]
                ${isActive ? "bg-[#FFF9ED] border-2" : "bg-white border"}`}
                  >
                    {/* Discount Badge */}
                    <span
                      className={`absolute -top-3 left-1/2 -translate-x-1/4 text-xs font-semibold px-2 py-1 rounded-full text-nowrap
                  ${
                    isActive
                      ? "bg-[#6D246A] text-white"
                      : "bg-yellow-400 text-black"
                  }`}
                    >
                      {pack.discount}
                    </span>

                    {/* Product Image */}
                    <div className="flex justify-center">
                      <img
                        src={pack.image}
                        alt={pack.label}
                        className="w-16 h-20 object-contain"
                      />
                    </div>

                    {/* Label */}
                    <p
                      className={`text-center font-bold text-sm
                  ${isActive ? "text-[#6D246A]" : "text-purple-400"}`}
                    >
                      {pack.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-3">
            <div className="flex items-center border border-[#F9C255] text-[#6D246A] rounded-full">
              <button
                className="px-5 py-2 text-lg font-semibold bg-[#FFECC8] rounded-l-full"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="px-8 py-2 text-lg font-semibold bg-[#fbf6ef]">
                {quantity < 10 ? `0${quantity}` : quantity}
              </span>
              <button
                className="px-5 py-2 text-lg font-semibold bg-[#FFECC8] rounded-r-full"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <CustomButton width="full">
              <div className="w-full flex justify-center">
                <div className="flex gap-2 items-center text-[#6D246A]">
                  <BsCartDash />
                  <span className="text-lg font-bold">Add to Cart</span>
                </div>
              </div>
            </CustomButton>
          </div>

          {/* Extra Info */}
          <ul className="font-medium text-[#484548] space-y-2">
            <li>• Texture: Powder</li>
            <li>• Flavour: Jaljeera</li>
          </ul>
        </div>
      </div>

      {/* propereties */}
      <div className="max-w-5xl px-4 mx-auto flex flex-wrap items-center gap-4 justify-between">
        {productProperties.map((p, index) => (
          <div className="flex flex-col items-center gap-3" key={index}>
            <img
              src={p.icon}
              alt={p.property}
              className="w-[40px] sm:w-[60px] lg:w-[92px] h-[40px] sm:h-[60px] lg:h-[92px]"
            />
            <div className="sm:text-lg font-semibold text-[#979797]">
              {p.property}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;
