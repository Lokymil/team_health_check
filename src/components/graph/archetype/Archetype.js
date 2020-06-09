import React from "react";

import "./Archetype.scss";
import ArchetypeModal from "./ArchetypeModal";

const getInitial = () => [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const formattedData = (data) =>
  data.reduce((acc, item) => {
    const line = parseInt(item.enterprise) + 1;
    const column = parseInt(item.personnal) + 1;
    acc[line][column]++;
    return acc;
  }, getInitial());

const Archetype = ({ data }) => {
  const formatData = formattedData(data);

  return (
    <>
      <div className="archetype__title-wrapper">
        <h3 className="archetype__title">Details</h3>
        <ArchetypeModal />
      </div>
      <div className="archetype__tab">
        <div className="archetype__header-caption archetype__header-caption_top">
          Personnal satisfaction
        </div>
        <div className="archetype__header-caption archetype__header-caption_left">
          company perceived satisfaction
        </div>
        <div className="archetype__row">
          <div className="archetype__header archetype__cell"></div>
          <div className="archetype__header archetype__cell">Unsatisfied</div>
          <div className="archetype__header archetype__cell">Indifferent</div>
          <div className="archetype__header archetype__cell">Satisfied</div>
        </div>
        <div className="archetype__row">
          <div className="archetype__header archetype__cell">Unsatisfied</div>
          <div className="critical archetype__cell">
            <div className="archetype__caption">Lose - lose</div>
            <div>{formatData[0][0]}</div>
          </div>
          <div className="bad archetype__cell">
            <div className="archetype__caption">Work against company</div>
            <div>{formatData[0][1]}</div>
          </div>
          <div className="neutral archetype__cell">
            <div className="archetype__caption">
              'Submarine' / low self-estim
            </div>
            <div>{formatData[0][2]}</div>
          </div>
        </div>
        <div className="archetype__row">
          <div className="archetype__header archetype__cell">Indifferent</div>
          <div className="bad archetype__cell">
            <div className="archetype__caption">Work against career</div>
            <div>{formatData[1][0]}</div>
          </div>
          <div className="neutral archetype__cell">
            <div className="archetype__caption">Hide out</div>
            <div>{formatData[1][1]}</div>
          </div>
          <div className="good archetype__cell">
            <div className="archetype__caption">Junior</div>
            <div>{formatData[1][2]}</div>
          </div>
        </div>
        <div className="archetype__row">
          <div className="archetype__header archetype__cell">Satisfied</div>
          <div className="neutral archetype__cell">
            <div className="archetype__caption">
              Force himself for the good of the company
            </div>
            <div>{formatData[2][0]}</div>
          </div>
          <div className="good archetype__cell">
            <div className="archetype__caption">Expert</div>
            <div>{formatData[2][1]}</div>
          </div>
          <div className="excellent archetype__cell">
            <div className="archetype__caption">Win - win</div>
            <div>{formatData[2][2]}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Archetype;
