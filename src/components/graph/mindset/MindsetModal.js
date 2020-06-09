import React from "react";
import InfoModal from "../../modal/InfoModal";
import "./MindsetModal.scss";

const MindsetModal = () => (
  <InfoModal about="simplified mindset">
    <div className="mindset-modal__wrapper">
      <img src="/img/mindset/sample.png" alt="Mindset sample" height="250" />
      <article className="mindset-modal__caption">
        <p>
          This is a simplified way to check one's mindset. Data from detailled
          mindset are used to generate this graph and display how many people
          are in good or bad mindset. The main point is the more people in green
          bar the better.
        </p>
        <p>
          People in bad or critical mindset need help as quickly as possible to
          change the situation they are in. Otherwise, they might burn out,
          leave or harm your company.
        </p>
        <p>
          To have a better understanding of what simplified mindset can refere
          to and have a better understanding of what people needs, please check
          detailled result. To help you associate this graph to detailled one,
          keep in mind that colors are matching.
        </p>
      </article>
    </div>
  </InfoModal>
);

export default MindsetModal;
