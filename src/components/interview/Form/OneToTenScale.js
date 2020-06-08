import React from "react";
import classNames from "classnames";
import "./OneToTenScale.scss";

const OneToTenScale = ({
  name,
  checkedValue,
  setCheckedValue,
  className,
  lowerCaption,
  upperCaption,
}) => {
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
    <div className={classNames("one-to-ten--wrapper", className)}>
      {lowerCaption && (
        <span className="one-to-ten--caption">{lowerCaption}</span>
      )}
      <div className={"one-to-ten--scale"}>{scale}</div>
      {upperCaption && (
        <span className="one-to-ten--caption">{upperCaption}</span>
      )}
    </div>
  );
};

export default OneToTenScale;
