import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "free",
      price: 10,
      features: [
        "Awesome feature",
        "extra feature",
        "Unnecesery feature",
        "will never use feature",
        "hudai feature",
        "ajaira features",
      ],
    },
    {
      id: 2,
      name: "Premium",
      price: 9.0,
      features: [
        "Awesome feature",
        "extra feature",
        "Unnecesery feature",
        "will never use feature",
        "hudai feature",
        "ajaira features",
      ],
    },
    {
      id: 3,
      name: "medium",
      price: 10,
      features: [
        "Awesome feature",
        "extra feature",
        "Unnecesery feature",
        "will never use feature",
        "hudai feature",
        "ajaira features",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-indigo-300 p-12 text-white">
        Best deal of the city
      </h2>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {pricingOption.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
