import React, { useRef } from "react";
import { csvToJson } from "../../utils";

const CsvLoader = ({ onUpload }) => {
  const inputFile = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const csv = await inputFile.current.files[0].text();
    onUpload(csvToJson(csv));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Upload CSV file:</label>
      <input type="file" ref={inputFile} />
      <button>Upload</button>
    </form>
  );
};

export default CsvLoader;
