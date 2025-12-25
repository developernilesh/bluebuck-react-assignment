import CustomButton from "../../ui/CustomButton";
import Heading from "../../ui/Heading";

const Story = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto space-y-16">
        <div className="px-5">
          <div className="bg-[#F8F8F8] rounded-xl sm:rounded-3xl flex flex-col lg:flex-row gap-3">
            <div className="w-full flex flex-col sm:flex-row items-center lg:items-start">
              <div className="w-full h-full flex items-center p-4 md:p-6 lg:p-8">
                <div className="w-full max-w-[320px] space-y-8">
                  <Heading>Aswasila Gold Powder</Heading>
                  <div className="text-3xl font-medium text-[#484548]">
                    USE CODE&nbsp;
                    <span className="font-bold text-[#373437]">TAN05</span> FOR
                    EXTRA{" "}
                    <span className="font-bold text-[#F9C255]">5% OFF</span>
                  </div>
                  <CustomButton type="primary">Explore Now</CustomButton>
                </div>
              </div>
              <img src="Shorts.png" alt="Shorts" className="hidden sm:block" />
              <img
                src="ShortsMob.png"
                alt="Shorts"
                className="block sm:hidden w-full object-cover"
              />
            </div>
            <img
              src="AswasilaShort.png"
              alt="AswasilaShort"
              className="hidden lg:block"
            />
            <img
              src="AswasilaMob.png"
              alt="AswasilaShort"
              className="block lg:hidden w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-center space-y-6 px-5">
            <Heading>Pledge to a Holistic Life!</Heading>
            <div className="text-[#484548] ">
              Committed to Helping You Feel Stronger, Healthier, and More
              Confident with Holistic, Trusted Wellness Solutions
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {["StoryLine1", "StoryLine2", "StoryLine3", "StoryLine4"].map(
              (item, index) => (
                <img
                  key={index}
                  src={`${item}.png`}
                  alt={item}
                  className="w-full object-cover"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
