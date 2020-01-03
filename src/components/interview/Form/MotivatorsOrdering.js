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
  const onDragEnd = result => {
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="motivatorsOrdering" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={classNames("motivators--droppable", {
              dragging: snapshot.isDraggingOver
            })}
            {...provided.droppableProps}
          >
            {motivators
              .map(motivator => {
                const header = statsHeaders.find(
                  header => header.name === `${motivator.name}Matter`
                );
                return { ...header, name: motivator.name };
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
                        dragged: snapshot.isDragging
                      })}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      {motivator.label}
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MotivatorsOrdering;
