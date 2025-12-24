import Heading from "../ui/Heading";

const Subscribe = () => {
  return (
    <div
      className="w-full min-h-[244px] flex flex-col justify-center items-center gap-5 px-5 py-8 md:py-16"
      style={{ backgroundImage: `url('SubscribeBanner.png')` }}
    >
      <Heading className="text-center">I want to get healthier</Heading>
      <p className="w-full max-w-2xl text-center text-[#245237]">
        Struggling to choose? Let us guide you in finding the perfect products.
        Our experts are here to assist, ensuring you discover the ideal remedies
        for your well-being needs.
      </p>
      <div className="flex w-full max-w-3xl mt-3 overflow-hidden rounded-md border border-[#F9C255]">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-4 py-3 text-sm outline-none"
        />
        <button className="bg-[#F9C255] px-6 py-3 text-[#430C41] font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
