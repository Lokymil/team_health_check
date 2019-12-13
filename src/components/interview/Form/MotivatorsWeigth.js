import React from "react";

const MotivatorsWeight = ({ motivators, setMotivators }) => {
  const handleWeight = (name, weight) => e => {
    const updatedWeight = motivators.map(motivator => {
      if (motivator.name === name) {
        return { ...motivator, weight };
      }
      return motivator;
    });
    setMotivators(updatedWeight);
  };
  return (
    <div>
      {motivators.map(motivator => (
        <div key={motivator.name}>
          {motivator.name}
          <div>
            <button onClick={handleWeight(motivator.name, 1)}>
              =) {motivator.weight === 1 && "!!"}
            </button>
            <button onClick={handleWeight(motivator.name, 0)}>
              =| {motivator.weight === 0 && "!!"}
            </button>
            <button onClick={handleWeight(motivator.name, -1)}>
              =( {motivator.weight === -1 && "!!"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotivatorsWeight;
