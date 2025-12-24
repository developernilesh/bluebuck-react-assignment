import { useState } from "react";

const images = [
  "JeeraShakti.png",
  "JeeraShakti.png",
  "JeeraShakti.png",
  "JeeraShakti.png",
  "JeeraShakti.png",
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: IMAGE GALLERY */}
        <div>
          <div className="bg-white rounded-2xl flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Product"
              className="w-full max-w-md object-cover rounded-2xl"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-lg p-1 transition
                  ${
                    selectedImage === img
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-14 h-14 object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-2">JEERA SHAKTI POWDER</h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl font-semibold text-black">₹604</span>
            <span className="line-through text-gray-400">₹711</span>
            <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-2 py-1 rounded">
              15% OFF
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="text-orange-500 font-semibold">★ 4.4</span>
            <span className="text-gray-500">(400)</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">1.4k Purchases</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            A traditional Ayurvedic digestive medicine uses natural ingredients
            to enhance digestion, balance digestive acids, and relieve bloating
            and indigestion.
          </p>

          {/* Pack Size */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-purple-700 mb-3 uppercase">
              Pack Size
            </h3>

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
                      ? "bg-purple-700 text-white"
                      : "bg-yellow-400 text-black"
                  }`}
                    >
                      {pack.discount}
                    </span>

                    {/* Product Image */}
                    <div className="flex justify-center mb-2">
                      <img
                        src={pack.image}
                        alt={pack.label}
                        className="w-16 h-20 object-contain"
                      />
                    </div>

                    {/* Label */}
                    <p
                      className={`text-center font-bold text-sm
                  ${isActive ? "text-purple-700" : "text-purple-400"}`}
                    >
                      {pack.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-full overflow-hidden">
              <button
                className="px-4 py-2 text-lg"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-4 py-2 text-lg"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-orange-400 hover:bg-orange-500 transition text-white font-semibold py-3 rounded-full">
              Add to Cart
            </button>
          </div>

          {/* Extra Info */}
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Texture: Powder</li>
            <li>• Flavour: Jaljeera</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Specification;
