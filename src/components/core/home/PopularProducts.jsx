import { LuMenu } from "react-icons/lu";
import { homePagePopularProducts } from "../../../data/data";
import PopularProductCard from "../../common/home/PopularProductCard";
import CustomButton from "../../ui/CustomButton";
import Heading from "../../ui/Heading";

const filterOptions = ["Hot Flashes", "Plant Protein", "Vegan Calcium"];

const PopularProducts = () => {
  return (
    <div className="w-full bg-[#FBF8F2]">
      <div className="container mx-auto px-5 py-16 space-y-8">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="space-y-4">
            <Heading>Popular Products</Heading>
            <div className="flex items-center gap-3">
              {filterOptions.map((item, index) => (
                <button
                  key={index}
                  className="w-fit flex items-center gap-[10px] px-5 py-[10px] font-semibold text-[#432F43] border border-[#F9C255] rounded-[50px]"
                >
                  <LuMenu className="w-7 h-7 hidden sm:block" />
                  <div>{item}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <CustomButton type="primary">See All Products</CustomButton>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {homePagePopularProducts.map((product, index) => (
            <PopularProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
