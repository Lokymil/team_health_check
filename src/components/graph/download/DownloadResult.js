import React from "react";
import { jsonToCsv } from "../../../utils";

const DownloadResult = ({ data }) => {
  const csvData = "data:text/csv;charset=utf-8," + jsonToCsv(data);

  return (
    <a href={encodeURI(csvData)} download={"health_check.csv"}>
      Get my results
    </a>
  );
};

export default DownloadResult;
