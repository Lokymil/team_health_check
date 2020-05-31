import React from "react";
import classNames from "classnames";
import "./MotivatorCard.scss";

const MotivatorCard = ({
  innerRef,
  isDragging,
  draggableProps,
  dragHandleProps,
  motivator,
  handleWeight,
}) => (
  <div
    ref={innerRef}
    className={classNames("motivators--draggable", {
      dragged: isDragging,
    })}
    {...draggableProps}
    {...dragHandleProps}
  >
    <span className="title">{motivator.label}</span>
    <span className="description">{motivator.description}</span>
    <div className="motivators--weights">
      <button
        onClick={handleWeight(1)}
        className={classNames("motivators--weight", {
          selected: motivator.weight === 1,
        })}
      >
        <div className="icon icon-happy" />
      </button>
      <button
        onClick={handleWeight(0)}
        className={classNames("motivators--weight", {
          selected: motivator.weight === 0,
        })}
      >
        <div className="icon icon-neutral" />
      </button>
      <button
        onClick={handleWeight(-1)}
        className={classNames("motivators--weight", {
          selected: motivator.weight === -1,
        })}
      >
        <div className="icon icon-sad" />
      </button>
    </div>
  </div>
);

export default MotivatorCard;
