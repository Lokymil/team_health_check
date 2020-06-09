import React, { useState } from "react";
import "./Mindset.scss";
import MindsetModal from "./MindsetModal";

const getInitial = () => [
  { id: "Critical", number: 0, color: "#e91e63" },
  { id: "Negative", number: 0, color: "#ff6f00" },
  { id: "Neutral", number: 0, color: "#ffc107" },
  { id: "Positive", number: 0, color: "#a5d6a7" },
  { id: "Excellent", number: 0, color: "#4caf50" },
];

const aggregateData = (data) =>
  data.reduce((acc, item) => {
    const index = 2 + parseInt(item.enterprise) + parseInt(item.personnal);
    acc[index].number += 1;
    return acc;
  }, getInitial());

const formatData = (data) => {
  const aggregatedData = aggregateData(data);

  const highestNumber = [...aggregatedData].sort(
    (a, b) => b.number - a.number
  )[0].number;

  const ratio = highestNumber / 300;
  return aggregatedData.map((item) => ({
    ...item,
    height: item.number / ratio,
  }));
};

const Mindset = ({ data }) => {
  const [formattedData] = useState(formatData(data));

  return (
    <>
      <div className="mindset__title-wrapper">
        <h3 className="mindset__title">Simplified</h3>
        <MindsetModal />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        width="400"
        height="400"
      >
        <rect width="400" height="400" fill="transparent"></rect>
        <line
          stroke="#dddddd"
          strokeWidth="1"
          opacity="1"
          x1="0"
          x2="400"
          y1="300"
          y2="300"
        ></line>
        <g transform="translate(0,300)">
          <g transform="translate(44,0)" style={{ opacity: 1 }}>
            <line
              x1="0"
              x2="0"
              y1="0"
              y2="5"
              style={{ stroke: "rgb(119, 119, 119)", strokeWidth: "1px" }}
            ></line>
            <text
              dominantBaseline="text-before-edge"
              textAnchor="middle"
              transform="translate(0,10) rotate(0)"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                fill: "rgb(51, 51, 51)",
              }}
            >
              Critical
            </text>
          </g>
          <g transform="translate(122,0)" style={{ opacity: 1 }}>
            <line
              x1="0"
              x2="0"
              y1="0"
              y2="5"
              style={{ stroke: "rgb(119, 119, 119)", strokeWidth: "1px" }}
            ></line>
            <text
              dominantBaseline="text-before-edge"
              textAnchor="middle"
              transform="translate(0,10) rotate(0)"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                fill: "rgb(51, 51, 51)",
              }}
            >
              Negative
            </text>
          </g>
          <g transform="translate(200,0)" style={{ opacity: 1 }}>
            <line
              x1="0"
              x2="0"
              y1="0"
              y2="5"
              style={{ stroke: "rgb(119, 119, 119)", strokeWidth: "1px" }}
            ></line>
            <text
              dominantBaseline="text-before-edge"
              textAnchor="middle"
              transform="translate(0,10) rotate(0)"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                fill: "rgb(51, 51, 51)",
              }}
            >
              Neutral
            </text>
          </g>
          <g transform="translate(278,0)" style={{ opacity: 1 }}>
            <line
              x1="0"
              x2="0"
              y1="0"
              y2="5"
              style={{ stroke: "rgb(119, 119, 119)", strokeWidth: "1px" }}
            ></line>
            <text
              dominantBaseline="text-before-edge"
              textAnchor="middle"
              transform="translate(0,10) rotate(0)"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                fill: "rgb(51, 51, 51)",
              }}
            >
              Positive
            </text>
          </g>
          <g transform="translate(356,0)" style={{ opacity: 1 }}>
            <line
              x1="0"
              x2="0"
              y1="0"
              y2="5"
              style={{ stroke: "rgb(119, 119, 119)", strokeWidth: "1px" }}
            ></line>
            <text
              dominantBaseline="text-before-edge"
              textAnchor="middle"
              transform="translate(0,10) rotate(0)"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                fill: "rgb(51, 51, 51)",
              }}
            >
              Excellent
            </text>
          </g>
        </g>
        <g>
          <g transform="translate(9, 0)">
            <rect
              width="70"
              height={formattedData[0].height}
              transform={`translate(0, ${300 - formattedData[0].height})`}
              rx="0"
              ry="0"
              fill={formattedData[0].color}
              strokeWidth="0"
              stroke={formattedData[0].color}
            ></rect>
            <text
              x="35"
              y="150"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                pointerEvents: "none",
              }}
            >
              {formattedData[0].number}
            </text>
          </g>
          <g transform="translate(87, 0)">
            <rect
              width="70"
              height={formattedData[1].height}
              transform={`translate(0, ${300 - formattedData[1].height})`}
              rx="0"
              ry="0"
              fill={formattedData[1].color}
              strokeWidth="0"
              stroke={formattedData[1].color}
            ></rect>
            <text
              x="35"
              y="150"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                pointerEvents: "none",
              }}
            >
              {formattedData[1].number}
            </text>
          </g>
          <g transform="translate(165, 0)">
            <rect
              width="70"
              height={formattedData[2].height}
              transform={`translate(0, ${300 - formattedData[2].height})`}
              rx="0"
              ry="0"
              fill={formattedData[2].color}
              strokeWidth="0"
              stroke={formattedData[2].color}
            ></rect>
            <text
              x="35"
              y="150"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                pointerEvents: "none",
              }}
            >
              {formattedData[2].number}
            </text>
          </g>
          <g transform="translate(243, 0)">
            <rect
              width="70"
              height={formattedData[3].height}
              transform={`translate(0, ${300 - formattedData[3].height})`}
              rx="0"
              ry="0"
              fill={formattedData[3].color}
              strokeWidth="0"
              stroke={formattedData[3].color}
            ></rect>
            <text
              x="35"
              y="150"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                pointerEvents: "none",
              }}
            >
              {formattedData[3].number}
            </text>
          </g>
          <g transform="translate(321, 0)">
            <rect
              width="70"
              height={formattedData[4].height}
              transform={`translate(0, ${300 - formattedData[4].height})`}
              rx="0"
              ry="0"
              fill={formattedData[4].color}
              strokeWidth="0"
              stroke={formattedData[4].color}
            ></rect>
            <text
              x="35"
              y="150"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily: "sans-serif",
                fontSize: "11px",
                pointerEvents: "none",
              }}
            >
              {formattedData[4].number}
            </text>
          </g>
        </g>
      </svg>
    </>
  );
};

export default Mindset;
