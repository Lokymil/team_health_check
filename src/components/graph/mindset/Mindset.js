import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const getInitial = () => [
  { id: "Critical", "number of person": 0 },
  { id: "Negative", "number of person": 0 },
  { id: "Neutral", "number of person": 0 },
  { id: "Positive", "number of person": 0 },
  { id: "Excellent", "number of person": 0 },
];
const formattedData = (data) =>
  data.reduce((acc, item) => {
    const index = 2 + parseInt(item.enterprise) + parseInt(item.personnal);
    acc[index]["number of person"] += 1;
    return acc;
  }, getInitial());

const Mindset = ({ data }) => (
  <ResponsiveBar
    data={formattedData(data)}
    keys={["number of person"]}
    colors={{ scheme: "category10" }}
    margin={{ top: 50, right: 180, bottom: 50, left: 60 }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
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
);

export default Mindset;
