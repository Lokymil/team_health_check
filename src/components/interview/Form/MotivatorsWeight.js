import React from "react";
import classNames from "classnames";
import "./MotivatorsWeight.scss";

const MotivatorsWeight = ({ motivators, setMotivators, className }) => {
  const handleWeight = (name, weight) => e => {
    e.preventDefault();
    const updatedWeight = motivators.map(motivator => {
      if (motivator.name === name) {
        return { ...motivator, weight };
      }
      return motivator;
    });
    setMotivators(updatedWeight);
  };
  return (
    <div className={className}>
      {motivators.map(motivator => (
        <div key={motivator.name}>
          {motivator.name}
          <div className="motivators--weights">
            <button
              onClick={handleWeight(motivator.name, 1)}
              className={classNames("motivators--weight", {
                selected: motivator.weight === 1
              })}
            >
              <div className="icon icon-happy" />
              <span>Satisfied</span>
            </button>
            <button
              onClick={handleWeight(motivator.name, 0)}
              className={classNames("motivators--weight", {
                selected: motivator.weight === 0
              })}
            >
              <div className="icon icon-neutral" />
              <span>Neutral</span>
            </button>
            <button
              onClick={handleWeight(motivator.name, -1)}
              className={classNames("motivators--weight", {
                selected: motivator.weight === -1
              })}
            >
              <div className="icon icon-sad" />
              <span>Unsatisfied</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotivatorsWeight;
