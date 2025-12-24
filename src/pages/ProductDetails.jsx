import Specification from "../components/core/product-details/Specification";

const ProductDetails = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-5 py-16 space-y-16">
        {/* product specifications */}
        <Specification />
        
      </div>
    </div>
  );
};

export default ProductDetails;
