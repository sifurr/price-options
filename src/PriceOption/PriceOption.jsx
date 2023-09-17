import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-700 rounded-lg p-6 flex flex-col text-white">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">${price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-6">{name}</h4>
      <div className="ml-4 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-orange-400 hover:bg-orange-600 mt-12 rounded-lg font-bold text-2xl py-4 w-full">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
