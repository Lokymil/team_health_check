import React from "react";
import InfoModal from "../../modal/InfoModal";
import "./RadarModal.scss";

const RadarModal = () => (
  <InfoModal about="radar graph">
    <div className="radar-modal__wrapper">
      <div className="radar-modal__img-wrapper">
        <img src="/img/radar/sample.png" alt="Sample" height="250" />
      </div>
      <article className="radar-modal__caption">
        <h4>Caption</h4>
        <ul>
          <li>
            <span className="radar-modal__caption-name importance">
              Importance:
            </span>
            higher value means higher impact and expectation
          </li>
          <li>
            <span className="radar-modal__caption-name score">Score:</span>
            higher value means higher satisfaction
          </li>
        </ul>
        <h4>How to read</h4>
        <p>
          For each motivator, whatever the importance, the higher score the
          better.
        </p>
        <p>
          High importance motivators must have a high score, otherwise your team
          will get frustrated. If one or more highly important motivator has a
          low score, it should be your priority to fix this with you team.
        </p>
        <p>
          Medium and low importance motivators have lower expectation from your
          team. Then impact from low score might be ignored if you have other
          priorities. However, keep in mind that your team have low expectation
          on those motivators, then they should be easy to fulfill. By fixing
          low importance motivators, you will reduce risks of frustration.
        </p>
      </article>
    </div>
  </InfoModal>
);

export default RadarModal;
