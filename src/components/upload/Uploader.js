import React from "react";
import CsvLoader from "./CsvLoader";
import FileFormat from "./FileFormat";
import { useFileContext } from "../../context/FileContext";

function Uploader({ history }) {
  const { setFileData } = useFileContext();

  const handleUpload = (data) => {
    setFileData(data);
    history.push("/visualize/graph");
  };

  return (
    <div>
      <h1>Load your team's data</h1>
      <CsvLoader onUpload={handleUpload} />
      <FileFormat />
    </div>
  );
}

export default Uploader;
