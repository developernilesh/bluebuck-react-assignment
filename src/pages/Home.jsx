import ProductCategory from "../components/core/home/ProductCategory";
import PopularProducts from "../components/core/home/PopularProducts";
import Story from "../components/core/home/Story";
import FeaturedProducts from "../components/core/home/FeaturedProducts";
import CustomerReviews from "../components/core/home/CustomerReviews";
import About from "../components/core/home/About";

const Home = () => {
  return (
    <>
      {/* product category section */}
      <section>
        <ProductCategory />
      </section>

      {/* banner image section */}
      <section>
        <img
          src="Banner.png"
          alt="Banner"
          className="w-full h-[345px] sm:h-auto object-cover sm:-my-12 md:-my-16 lg:-my-20 xl:-my-24"
        />
      </section>

      {/* about section */}
      <section>
        <About />
      </section>

      {/* popular products section */}
      <section>
        <PopularProducts />
      </section>

      {/* story section */}
      <section>
        <Story />
      </section>

      {/* featured products section */}
      <section>
        <FeaturedProducts />
      </section>

      {/* customer reviews */}
      <section>
        <CustomerReviews />
      </section>
    </>
  );
};

export default Home;
