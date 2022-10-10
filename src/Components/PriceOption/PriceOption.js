import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-300 m-3 rounded p-3">
      <div>
        <p className="text-3xl my-4">{option.name}</p>
        <h3>
          <span className="text-6xl font-bold text-white">{option.price}</span>{" "}
          <span className="text-3xl text-gray-300">/Mon</span>
        </h3>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-blue-500 w-full mt-4 rounded-md py-2 text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
