import React from "react";

const SatisfactionScale = ({ name, checkedValue, setCheckedValue }) => (
  <div>
    <input
      type="radio"
      id={`${name}-satisfied`}
      value={`${name}-satisfied`}
      name={name}
      checked={checkedValue === 1}
      onChange={() => setCheckedValue(1)}
    />
    <label htmlFor={`${name}-satisfied`}>Satisfied</label>
    <input
      type="radio"
      id={`${name}-indifferent`}
      value={`${name}-indifferent`}
      name={name}
      checked={checkedValue === 0}
      onChange={() => setCheckedValue(0)}
    />
    <label htmlFor={`${name}-indifferent`}>Indifferent</label>
    <input
      type="radio"
      id={`${name}-unsatisfied`}
      value={`${name}-unsatisfied`}
      name={name}
      checked={checkedValue === -1}
      onChange={() => setCheckedValue(-1)}
    />
    <label htmlFor={`${name}-unsatisfied`}>Unsatisfied</label>
  </div>
);

export default SatisfactionScale;
