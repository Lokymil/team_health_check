import React from "react";
import { jsonToCsv } from "../../../utils";
import "./DownloadResult.scss";

const DownloadResult = ({ data }) => {
  const csvData = "data:text/csv;charset=utf-8," + jsonToCsv(data);

  return (
    <a
      href={encodeURI(csvData)}
      download={"health_check.csv"}
      className="download__link button"
    >
      Get my results
    </a>
  );
};

export default DownloadResult;
