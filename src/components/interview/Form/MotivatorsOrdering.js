import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import "./MotivatorsOrdering.scss";
import { statsHeaders } from "../../../utils";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const MotivatorsOrdering = ({ motivators = [], setMotivators }) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      motivators,
      result.source.index,
      result.destination.index
    );

    setMotivators(items);
  };

  const handleWeight = (name, weight) => (e) => {
    e.preventDefault();
    const updatedWeight = motivators.map((motivator) => {
      if (motivator.name === name) {
        return { ...motivator, weight };
      }
      return motivator;
    });
    setMotivators(updatedWeight);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="motivators--scale">
        <span>More important</span>
        <span>Less important</span>
      </div>
      <div className="motivators--droppable">
        <Droppable droppableId="motivatorsOrdering" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={classNames("motivators--droppable-context", {
                dragging: snapshot.isDraggingOver,
              })}
              {...provided.droppableProps}
            >
              {motivators
                .map((motivator) => {
                  const header = statsHeaders.find(
                    (header) => header.name === `${motivator.name}Matter`
                  );
                  return { ...header, ...motivator };
                })
                .map((motivator, index) => (
                  <Draggable
                    key={motivator.name}
                    draggableId={motivator.name}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        className={classNames("motivators--draggable", {
                          dragged: snapshot.isDragging,
                        })}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                      >
                        <span className="title">{motivator.label}</span>
                        <span className="description">
                          {motivator.description}
                        </span>
                        <div className="motivators--weights">
                          <button
                            onClick={handleWeight(motivator.name, 1)}
                            className={classNames("motivators--weight", {
                              selected: motivator.weight === 1,
                            })}
                          >
                            <div className="icon icon-happy" />
                          </button>
                          <button
                            onClick={handleWeight(motivator.name, 0)}
                            className={classNames("motivators--weight", {
                              selected: motivator.weight === 0,
                            })}
                          >
                            <div className="icon icon-neutral" />
                          </button>
                          <button
                            onClick={handleWeight(motivator.name, -1)}
                            className={classNames("motivators--weight", {
                              selected: motivator.weight === -1,
                            })}
                          >
                            <div className="icon icon-sad" />
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default MotivatorsOrdering;
