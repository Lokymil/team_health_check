import React from "react";
import CsvLoader from "./CsvLoader";
import FileFormat from "./FileFormat";
import { withFileContext } from "../../context/FileContext";

const Uploader = ({ setFileData, history }) => {
  const handleUpload = data => {
    setFileData(data);
    history.push("/visualize");
  };

  return (
    <div>
      <CsvLoader onUpload={handleUpload} />
      <FileFormat />
    </div>
  );
};

export default withFileContext(Uploader);
