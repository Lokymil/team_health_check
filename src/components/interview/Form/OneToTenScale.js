import React from "react";

const OneToTenScale = ({ name, checkedValue, setCheckedValue }) => {
  const scale = [];

  for (let i = 1; i < 11; i++) {
    scale.push(
      <React.Fragment key={`radio-${i}`}>
        <input
          type="radio"
          id={`${name}-${i}`}
          value={`${name}-${i}`}
          name={name}
          checked={i === checkedValue}
          onChange={() => setCheckedValue(i)}
        />
        <label htmlFor={`${name}-${i}`}>{i}</label>
      </React.Fragment>
    );
  }

  return <div>{scale}</div>;
};

export default OneToTenScale;
