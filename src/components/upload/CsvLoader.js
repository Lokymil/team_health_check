import React, { useRef } from "react";

function csvReader(csv) {
  const lines = csv.split("\n").filter(line => line);
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }

  return result; //JSON
}

const CsvLoader = ({ onUpload }) => {
  const inputFile = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const csv = await inputFile.current.files[0].text();
    onUpload(csvReader(csv));
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
