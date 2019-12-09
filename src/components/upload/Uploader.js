import React from "react";
import CsvLoader from "./CsvLoader";
import FileFormat from "./FileFormat";

const Uploader = ({ onUpload }) => (
  <div>
    <CsvLoader onUpload={onUpload} />
    <FileFormat />
  </div>
);

export default Uploader;
