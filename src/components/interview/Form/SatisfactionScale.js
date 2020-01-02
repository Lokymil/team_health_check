import React from "react";
import classNames from "classnames";
import "./SatisfactionScale.scss";

const SatisfactionScale = ({
  name,
  checkedValue,
  setCheckedValue,
  className
}) => (
  <div className={classNames("satisfaction--scale", className)}>
    <span className="satisfaction--answer">
      <input
        type="radio"
        id={`${name}-satisfied`}
        value={`${name}-satisfied`}
        name={name}
        checked={checkedValue === 1}
        onChange={() => setCheckedValue(1)}
        className="satisfaction--radio"
      />
      <label htmlFor={`${name}-satisfied`} className="satisfaction--label">
        Satisfied
      </label>
    </span>
    <span className="satisfaction--answer">
      <input
        type="radio"
        id={`${name}-indifferent`}
        value={`${name}-indifferent`}
        name={name}
        checked={checkedValue === 0}
        onChange={() => setCheckedValue(0)}
        className="satisfaction--radio"
      />
      <label htmlFor={`${name}-indifferent`} className="satisfaction--label">
        Indifferent
      </label>
    </span>
    <span className="satisfaction--answer">
      <input
        type="radio"
        id={`${name}-unsatisfied`}
        value={`${name}-unsatisfied`}
        name={name}
        checked={checkedValue === -1}
        onChange={() => setCheckedValue(-1)}
        className="satisfaction--radio"
      />
      <label htmlFor={`${name}-unsatisfied`} className="satisfaction--label">
        Unsatisfied
      </label>
    </span>
  </div>
);

export default SatisfactionScale;
