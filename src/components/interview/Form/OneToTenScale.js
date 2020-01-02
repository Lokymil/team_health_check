import React from "react";
import classNames from "classnames";
import "./OneToTenScale.scss";

const OneToTenScale = ({ name, checkedValue, setCheckedValue, className }) => {
  const scale = [];

  for (let i = 1; i < 11; i++) {
    scale.push(
      <span key={`radio-${i}`} className="one-to-ten--answer">
        <input
          type="radio"
          id={`${name}-${i}`}
          value={`${name}-${i}`}
          name={name}
          checked={i === checkedValue}
          onChange={() => setCheckedValue(i)}
          className="one-to-ten--radio"
        />
        <label htmlFor={`${name}-${i}`} className="one-to-ten--label">
          {i}
        </label>
      </span>
    );
  }

  return (
    <div className={classNames("one-to-ten--scale", className)}>{scale}</div>
  );
};

export default OneToTenScale;
