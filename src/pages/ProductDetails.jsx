import MoreProductsInfo from "../components/core/product-details/MoreProductsInfo";
import ProductTabs from "../components/core/product-details/ProductTabs";
import Specification from "../components/core/product-details/Specification";

const ProductDetails = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-5 py-16 space-y-16">
        {/* product specifications */}
        <Specification />

        {/* product description, details, reviews */}
        <ProductTabs />

        {/* more products info */}
        <MoreProductsInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
