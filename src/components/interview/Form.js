import React, { useState } from "react";

const initialMotivators = {
  liberty: 0,
  curiosity: 0,
  acceptation: 0,
  power: 0,
  honor: 0,
  relationship: 0,
  goal: 0,
  status: 0,
  mastery: 0,
  order: 0
};

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
        <label for={`${name}-${i}`}>{i}</label>
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
    <label for={`${name}-satisfied`}>Satisfied</label>
    <input
      type="radio"
      id={`${name}-indifferent`}
      value={`${name}-indifferent`}
      name={name}
      checked={checkedValue === 0}
      onChange={() => setCheckedValue(0)}
    />
    <label for={`${name}-indifferent`}>Indifferent</label>
    <input
      type="radio"
      id={`${name}-unsatisfied`}
      value={`${name}-unsatisfied`}
      name={name}
      checked={checkedValue === -1}
      onChange={() => setCheckedValue(-1)}
    />
    <label for={`${name}-unsatisfied`}>Unsatisfied</label>
  </div>
);

const Form = () => {
  const [competency, setCompetency] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [enterpriseSatisfaction, setEnterpriseSatisfaction] = useState();
  const [personnalSatisfation, setPersonnalSatisfation] = useState();
  const [matterLevels, setMatterLevels] = useState(initialMotivators);
  const [scoreLevels, setScoreLevels] = useState(initialMotivators);

  return (
    <form>
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
      </div>
      <div>
        <h2>How your motivators are impacted by your project</h2>
        <label>
          Weight each motivators according to what is happening on your job
        </label>
      </div>
    </form>
  );
};

export default Form;
