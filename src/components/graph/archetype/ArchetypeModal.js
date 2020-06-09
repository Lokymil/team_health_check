import React from "react";
import InfoModal from "../../modal/InfoModal";
import "./ArchetypeModal.scss";

const ArchetypeModal = () => (
  <InfoModal about="detailled mindset">
    <article>
      <p className="archetype-modal__header">
        This tab associate archetype mindset to one's mindset according to one's
        satisfaction and how one think he matches company expectations.
        <br />
        For following explanation, we will write cases as{" "}
        <span className="archetype-modal__scenari-caption_case-header">
          "Personnal satisfaction - company perceived satisfaction"
        </span>
        .
        <br />
        Their are 3 main scenario, each one regrouping 3 cases:
      </p>
      <div>
        <div className="archetype-modal__scenario">
          <div className="archetype-modal__scenari">
            <div className="archetype-modal__scenari-header">
              <div className="archetype-modal__scenari-header_title">
                The good scenario
              </div>
              <img
                src="/img/archetype/good.png"
                alt="Good"
                height="150"
                width="262"
              />
            </div>
            <ul className="archetype-modal__scenari-caption">
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Satisfied - Satified:
                </span>
                Everything is fine! Good job.
              </li>
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Satisfied - Indifferent:
                </span>
                We got a junior here, learning a lot but not enough productive
                yet.
              </li>
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Indifferent - Satisfied:
                </span>
                We got an expert here, learning nothing but making the company
                grow.
              </li>
            </ul>
          </div>
          <div className="archetype-modal__scenari">
            <div className="archetype-modal__scenari-header">
              <div className="archetype-modal__scenari-header_title">
                The neutral scenario
              </div>
              <img
                src="/img/archetype/neutral.png"
                alt="Neutral"
                height="150"
                width="262"
              />
            </div>
            <ul className="archetype-modal__scenari-caption">
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Satisfied - Unsatified:
                </span>
                Will do what he want under the radar because he is convinced to
                dothe right thing even if it does not match company expectation.
              </li>
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Indifferent - Indifferent:
                </span>
                Waiting for an end to his current job but not in a rush, doing
                strictly what is necessary, nothing more.
              </li>
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Unsatified - Satisfied:
                </span>
                Working for the company but not for himself. Accept to miss
                better opportunity for the sake of reliability of his current
                job.
              </li>
            </ul>
          </div>
          <div className="archetype-modal__scenari">
            <div className="archetype-modal__scenari-header">
              <div className="archetype-modal__scenari-header_title">
                The bad scenario
              </div>
              <img
                src="/img/archetype/bad.png"
                alt="Bad"
                height="150"
                width="262"
              />
            </div>
            <ul className="archetype-modal__scenari-caption">
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Indifferent - Unsatified:
                </span>
                Does not fit in current job. He is fine with that but it may be
                harmful for the company.
              </li>
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Unsatified - Indifferent:
                </span>
                Expecting current situation to change as soon as possible.
              </li>
              <li>
                <span className="archetype-modal__scenari-caption_case-header">
                  Unsatified - Unsatisfied:
                </span>
                Nobody is satified! This need to change as quickly as possible.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </InfoModal>
);

export default ArchetypeModal;
