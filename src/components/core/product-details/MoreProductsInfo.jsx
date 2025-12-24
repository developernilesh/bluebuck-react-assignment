import {
  homePageFeaturedProducts,
  relatedComboProducts,
} from "../../../data/data";
import PopularProductCard from "../../common/home/PopularProductCard";
import Heading from "../../ui/Heading";

const MoreProductsInfo = () => {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-6">
        <Heading>Related Combo Products</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedComboProducts.map((product, index) => (
            <PopularProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <Heading>You may also like</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {homePageFeaturedProducts.map((product, index) => (
            <PopularProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <Heading>People also Bought</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {homePageFeaturedProducts.map((product, index) => (
            <PopularProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProductsInfo;
