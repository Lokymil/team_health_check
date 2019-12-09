import React from "react";
import "./Archetype.css";

const getInitial = () => [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

const formattedData = data =>
  data.reduce((acc, item) => {
    const line = parseInt(item.enterprise) + 1;
    const column = parseInt(item.personnal) + 1;
    acc[line][column]++;
    return acc;
  }, getInitial());

const Archetype = ({ data }) => {
  const formatData = formattedData(data);

  return (
    <div>
      <div className="archetype--tab">
        <div className="archetype--header"></div>
        <div className="archetype--header">Bad</div>
        <div className="archetype--header">Neutral</div>
        <div className="archetype--header">Good</div>
        <div className="archetype--header">Bad</div>
        <div className="critical">
          <div>Lose - lose</div>
          <div>{formatData[0][0]}</div>
        </div>
        <div className="bad">
          <div>Work against enterprise</div>
          <div>{formatData[0][1]}</div>
        </div>
        <div className="neutral">
          <div>'Submarine' / low estim</div>
          <div>{formatData[0][2]}</div>
        </div>
        <div className="archetype--header">Neutral</div>
        <div className="bad">
          <div>Work against career</div>
          <div>{formatData[1][0]}</div>
        </div>
        <div className="neutral">
          <div>Hide out</div>
          <div>{formatData[1][1]}</div>
        </div>
        <div className="good">
          <div>Junior</div>
          <div>{formatData[1][2]}</div>
        </div>
        <div className="archetype--header">Good</div>
        <div className="neutral">
          <div>Force himself for the good of the enterprise</div>
          <div>{formatData[2][0]}</div>
        </div>
        <div className="good">
          <div>Expert</div>
          <div>{formatData[2][1]}</div>
        </div>
        <div className="excellent">
          <div>Win - win</div>
          <div>{formatData[2][2]}</div>
        </div>
      </div>
    </div>
  );
};

export default Archetype;
