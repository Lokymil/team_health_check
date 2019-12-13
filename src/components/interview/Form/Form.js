import React, { useState } from "react";
import MotivatorsOrdering from "./MotivatorsOrdering";
import MotivatorsWeight from "./MotivatorsWeigth";
import SatisfactionScale from "./SatisfactionScale";
import OneToTenScale from "./OneToTenScale";

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

const Form = () => {
  const [competency, setCompetency] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [enterpriseSatisfaction, setEnterpriseSatisfaction] = useState();
  const [personnalSatisfaction, setPersonnalSatisfaction] = useState();
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
        <OneToTenScale
          name="competency"
          checkedValue={competency}
          setCheckedValue={setCompetency}
        />
        <label>2) How do you feel challenged by your job ?</label>
        <OneToTenScale
          name="challenge"
          checkedValue={challenge}
          setCheckedValue={setChallenge}
        />
      </div>
      <div>
        <h2>Entreprise & personnal satisfaction</h2>
        <label>
          3) According yo you, how does your entreprise/boss feel about you ?
        </label>
        <SatisfactionScale
          name="enterprise"
          checkedValue={enterpriseSatisfaction}
          setCheckedValue={setEnterpriseSatisfaction}
        />
        <label>4) How do you feel about your job ?</label>
        <SatisfactionScale
          name="personnal"
          checkedValue={personnalSatisfaction}
          setCheckedValue={setPersonnalSatisfaction}
        />
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
