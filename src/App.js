import React, { useState } from "react";
import Uploader from "./components/upload/Uploader";
import Graph from "./components/graph/Graph";

const App = () => {
  const [data, setData] = useState([]);

  const handleUpload = csv => setData(csv);
  const hasData = data.length > 0;

  return !hasData ? (
    <Uploader onUpload={handleUpload} />
  ) : (
    <Graph data={data} />
  );
};

export default App;
