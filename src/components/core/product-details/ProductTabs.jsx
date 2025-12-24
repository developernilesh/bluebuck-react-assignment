import { useState } from "react";
import ProductDescription from "./ProductDescription";

const tabs = ["Description", "Details", "Reviews"];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 -mb-6 ml-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-7 py-[10px] rounded-full border text-xl font-semibold transition-all
              ${
                activeTab === tab
                  ? "bg-[#F9C255] text-[#430C41] border-[#F9C255]"
                  : "bg-white text-[#430C41] border-[#DFD8CA]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="w-full border border-[#DFD8CA] rounded-2xl p-4 sm:p-8 pt-8 sm:pt-10 space-y-12">
        <div>
          {activeTab === "Description" && <ProductDescription />}

          {activeTab === "Details" && (
            <p className="text-gray-700">
              Detailed product information will appear here.
            </p>
          )}

          {activeTab === "Reviews" && (
            <p className="text-gray-700">Customer reviews will appear here.</p>
          )}
        </div>
        
        <img src="DetailsBanner.png" alt="DetailsBanner" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ProductTabs;
