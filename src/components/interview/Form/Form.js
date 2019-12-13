import React, { useState } from "react";
import MotivatorsOrdering from "./MotivatorsOrdering";
import MotivatorsWeight from "./MotivatorsWeigth";

const initialMotivators = [
  { name: "liberty", weight: 0 },
  { name: "curiosity", weight: 0 },
  { name: "acceptation", weight: 0 },
  { name: "power", weight: 0 },
  { name: "honor", weight: 0 },
  { name: "relationship", weight: 0 },
  { name: "goal", weight: 0 },
  { name: "status", weight: 0 },
  { name: "mastery", weight: 0 },
  { name: "order", weight: 0 }
];

const get1to10Scale = (name, checkedValue = 0, setCheckedValue = () => {}) => {
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

const getSatisfactionScale = (name, checkedValue, setCheckedValue) => (
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

const Form = () => {
  const [competency, setCompetency] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [enterpriseSatisfaction, setEnterpriseSatisfaction] = useState();
  const [personnalSatisfation, setPersonnalSatisfation] = useState();
  const [motivators, setMotivators] = useState(initialMotivators);

  return (
    <div>
      <h1>Let's try it !</h1>
      The interview aim to create your health check report and help you
      understand what are the strength and weakness of your current job. For the
      report to be as precise and effective as possible, be sure to be honest on
      your answer.
      <div>
        <h2>Qualification & challenge</h2>
        <label>1) How do you feel qualified for your job ?</label>
        {get1to10Scale("qualification", competency, setCompetency)}
        <label>2) How do you feel challenged by your job ?</label>
        {get1to10Scale("challenge", challenge, setChallenge)}
      </div>
      <div>
        <h2>Entreprise & personnal satisfaction</h2>
        <label>
          3) According yo you, how does your entreprise/boss feel about you ?
        </label>
        {getSatisfactionScale(
          "enterprise",
          enterpriseSatisfaction,
          setEnterpriseSatisfaction
        )}
        <label>4) How do you feel about your job ?</label>
        {getSatisfactionScale(
          "personnal",
          personnalSatisfation,
          setPersonnalSatisfation
        )}
      </div>
      <div>
        <h2>Your motivators</h2>
        <label>
          Order the following motivators according to your scale of importance
        </label>
        <MotivatorsOrdering
          motivators={motivators}
          setMotivators={setMotivators}
        />
      </div>
      <div>
        <h2>How your motivators are impacted by your project</h2>
        <label>
          Weight each motivators according to what is happening on your job
        </label>
        <MotivatorsWeight
          motivators={motivators}
          setMotivators={setMotivators}
        />
      </div>
    </div>
  );
};

export default Form;
