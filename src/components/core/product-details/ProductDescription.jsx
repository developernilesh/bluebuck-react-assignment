import React from "react";
import Heading2 from "../../ui/Heading2";

const ProductDescription = () => {
  return (
    <div className="space-y-10">
      <div>
        <Heading2>About Jeera Shakti</Heading2>
        <p className="text-[#484548] text-xl">
          A traditional Ayurvedic digestive medicine blended with natural
          ingredients. It enhances digestive power, balances digestive acids,
          and provides relief from bloating and indigestion.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center gap-3">
            <Heading2>Benefits Jeera Shakti:</Heading2>
            <div className="space-y-1">
              {[
                "Balances digestive acids.",
                "Strengthens the digestive process.",
                "Relieves indigestion and bloating.",
              ].map((item, index) => (
                <div className="flex items-center gap-2 text-xl font-medium text-[#484548]">
                  <span className="font-bold">{index + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="Benefit.png" alt="Benefit" className="w-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            src="Ingridient.png"
            alt="Ingridient"
            className="hidden sm:block w-full"
          />
          <div className="flex flex-col justify-center gap-3">
            <Heading2>Ingridients:</Heading2>
            <p className="text-xl font-medium text-[#484548]">
              Jeera, Saunf, Dhanyka, Ajowan, Aswagandha, Satamuli, Talmuli,
              Alkushi, Gokshura, Jayaphala, Methi, Golmorich, Turmeric, Sunth,
              Puga, Hing. Saindhav Lavan, Amchur, Sarjikshar, Abhrak Bhasma,
              Kajjali Bhasma, Suddha Shilajit
            </p>
            <div className="flex items-center gap-2 text-xl font-medium text-[#484548]">
              <span className="font-semibold">Preservative</span>
              <span>Sodium Benzoate</span>
            </div>
          </div>
          <img
            src="Ingridient.png"
            alt="Ingridient"
            className="sm:hidden w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center gap-3">
            <Heading2>Dosage</Heading2>
            <p className="text-xl font-medium text-[#484548]">
              1 teaspoon after lunch and dinner, mixed in 1 cup of water.
            </p>
          </div>
          <img src="Dosage.png" alt="Dosage" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
