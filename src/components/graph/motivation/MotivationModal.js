import React from "react";
import InfoModal from "../../modal/InfoModal";
import "./MotivationModal.scss";

const MotivationModal = () => {
  return (
    <InfoModal about="motivation graph">
      <div className="motivation-modal__content">
        <div className="motivation-modal__case">
          <img
            src="/img/motivation/overwhelmed.jpg"
            alt="Overwhelmed"
            height="150"
          />
          <div className="motivation-modal__case-caption">
            Feel overwhelmed by the work to be done. Need to be helped to learn
            or objectives/expectations must be lowered/lightened.
            <br />
            Might burn out.
          </div>
        </div>
        <div className="motivation-modal__case">
          <img
            src="/img/motivation/qualified.jpg"
            alt="Motivated"
            height="150"
          />
          <div className="motivation-modal__case-caption">
            Feel motivated. What has to be done fit qualification just right.
          </div>
        </div>
        <div className="motivation-modal__case">
          <img
            src="/img/motivation/over_qualified.jpg"
            alt="Over qualified"
            height="150"
          />
          <div className="motivation-modal__case-caption">
            Feel over qualified for the work to be done. Need to change
            objectives and new things to do.
            <br />
            Might bore out.
          </div>
        </div>
      </div>
    </InfoModal>
  );
};

export default MotivationModal;
