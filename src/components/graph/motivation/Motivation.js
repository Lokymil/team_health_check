import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import MotivationModal from "./MotivationModal";
import "./Motivation.scss";

const initial = [
  {
    id: "Motivation area",
    data: [
      { x: 0, y: 2 },
      { x: 1, y: 3 },
      { x: 2, y: 4 },
      { x: 3, y: 5 },
      { x: 4, y: 6 },
      { x: 5, y: 7 },
      { x: 6, y: 8 },
      { x: 7, y: 9 },
      { x: 8, y: 10 },
      { x: 2, y: 0 },
      { x: 3, y: 1 },
      { x: 4, y: 2 },
      { x: 5, y: 3 },
      { x: 6, y: 4 },
      { x: 7, y: 5 },
      { x: 8, y: 6 },
      { x: 9, y: 7 },
      { x: 10, y: 8 },
    ],
  },
];

const formattedData = (data) => {
  const points = data.map((item) => ({
    x: item.competency,
    y: item.challenge,
  }));
  const scatter = { id: "Team members", data: points };
  return [...initial, scatter];
};

const Motivation = ({ data }) => {
  const xScale = { type: "linear", min: -0.5, max: 10.5 };
  const yScale = { type: "linear", min: -0.5, max: 10.5 };
  return (
    <>
      <div className="motivation__title-wrapper">
        <h2 className="motivation__title">
          Motivation: challenge vs qualification
        </h2>
        <MotivationModal />
      </div>
      <ResponsiveScatterPlot
        data={formattedData(data)}
        xScale={xScale}
        yScale={yScale}
        colors={{ scheme: "category10" }}
        margin={{ top: 60, right: 180, bottom: 70, left: 90 }}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Felt qualification",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Felt challenge",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Motivation;
