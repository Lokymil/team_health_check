import React from "react";
import { ResponsiveRadar } from "@nivo/radar";

const fieldTypeMatter = "Matter";
const fieldTypeScore = "Score";

const fields = [
  "liberty",
  "curiosity",
  "acceptation",
  "power",
  "honor",
  "relationship",
  "goal",
  "status",
  "mastery",
  "order"
];

const getInitialReduceRadarValues = () => {
  const initial = {};
  fields.forEach(field => (initial[field] = { Importance: 0, Score: 0 }));
  return initial;
};

const getFormattedData = data => {
  const reducedData = data.reduce((acc, item) => {
    fields.forEach(field => {
      acc[field].Importance += parseInt(item[`${field}${fieldTypeMatter}`]);
      acc[field].Score += parseInt(item[`${field}${fieldTypeScore}`]);
    });
    return acc;
  }, getInitialReduceRadarValues());

  const moyDataAsPercent = Object.keys(reducedData).map(key => ({
    criterion: key,
    Importance:
      Math.round((10 - reducedData[key].Importance / data.length) * 10) / 10,
    Score: Math.round((reducedData[key].Score / data.length + 1) * 5 * 10) / 10
  }));

  return moyDataAsPercent;
};

const Radar = ({ data }) => {
  return (
    <ResponsiveRadar
      data={getFormattedData(data)}
      keys={["Importance", "Score"]}
      indexBy="criterion"
      maxValue={10}
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      gridShape="linear"
      colors={{ scheme: "category10" }}
      gridLevels={4}
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000"
              }
            }
          ]
        }
      ]}
    />
  );
};

export default Radar;
