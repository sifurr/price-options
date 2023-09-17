import PriceOption from "../../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym facilities during regular hours",
        "Cardio and strength training equipment",
        "Locker room access",
        "Free towel service",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Unlimited access to gym facilities, including extended hours",
        "Cardio and strength training equipment",
        "Locker room access with sauna",
        "Personalized fitness assessment and training plan",
        "Access to group fitness classes",
        "Nutritional consultation",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: 79.99,
      features: [
        "Unlimited access to gym facilities during regular hours",
        "Cardio and strength training equipment",
        "Locker room access",
        "Free towel service",
        "Access to family-oriented fitness classes",
        "Childcare services during workouts",
        "Discounts on additional family member enrollments",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl mb-8 text-center">Best price in the market</h2>
      <div className="grid md:grid-cols-3 gap-6">
      {
        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      </div>
    </div>
  );
};

export default PriceOptions;
