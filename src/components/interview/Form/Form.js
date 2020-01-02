import React, { useState } from "react";
import MotivatorsOrdering from "./MotivatorsOrdering";
import MotivatorsWeight from "./MotivatorsWeigth";
import SatisfactionScale from "./SatisfactionScale";
import OneToTenScale from "./OneToTenScale";
import { withFileContext } from "../../../context/FileContext";
import "./Form.scss";

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

const Form = ({ setFileData, history }) => {
  const [competency, setCompetency] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [enterprise, setEnterprise] = useState();
  const [personnal, setPersonnal] = useState();
  const [motivators, setMotivators] = useState(initialMotivators);

  const displayGraph = e => {
    e.preventDefault();
    const motivatorsOrder = motivators.reduce(
      (acc, elem, index) => ({ ...acc, [elem.name + "Matter"]: index }),
      {}
    );
    const motivatorsScore = motivators.reduce(
      (acc, elem) => ({ ...acc, [elem.name + "Score"]: elem.weight }),
      {}
    );

    const data = {
      competency,
      challenge,
      enterprise,
      personnal,
      ...motivatorsOrder,
      ...motivatorsScore
    };

    setFileData([data]);
    history.push("/visualize/graph");
  };

  return (
    <form onSubmit={displayGraph}>
      <h2>Let's try it !</h2>
      The interview aim to create your health check report and help you
      understand what are the strength and weakness of your current job. For the
      report to be as precise and effective as possible, be sure to be honest on
      your answers.
      <h3>Qualification & challenge</h3>
      <label className="interview--question">
        1) How do you feel qualified for your job ?
      </label>
      <OneToTenScale
        name="competency"
        checkedValue={competency}
        setCheckedValue={setCompetency}
        className="interview--answers"
      />
      <label className="interview--question">
        2) How do you feel challenged by your job ?
      </label>
      <OneToTenScale
        name="challenge"
        checkedValue={challenge}
        setCheckedValue={setChallenge}
        className="interview--answers"
      />
      <h3>Entreprise & personnal satisfaction</h3>
      <label className="interview--question">
        3) According yo you, how does your entreprise/boss feel about you ?
      </label>
      <SatisfactionScale
        name="enterprise"
        checkedValue={enterprise}
        setCheckedValue={setEnterprise}
        className="interview--answers"
      />
      <label className="interview--question">
        4) How do you feel about your job ?
      </label>
      <SatisfactionScale
        name="personnal"
        checkedValue={personnal}
        setCheckedValue={setPersonnal}
        className="interview--answers"
      />
      <h3>Your motivators</h3>
      <label className="interview--question">
        Order the following motivators according to your scale of importance:
      </label>
      <MotivatorsOrdering
        motivators={motivators}
        setMotivators={setMotivators}
        className="interview--answers"
      />
      <h3>How your motivators are impacted by your project</h3>
      <label className="interview--question">
        Weight each motivators according to what is happening on your job:
      </label>
      <MotivatorsWeight
        motivators={motivators}
        setMotivators={setMotivators}
        className="interview--answers"
      />
      <button type="submit">Show me my result !</button>
    </form>
  );
};

export default withFileContext(Form);
