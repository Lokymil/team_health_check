import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Uploader from "./components/upload/Uploader";
import Graph from "./components/graph/Graph";
import { FileContext } from "./context/FileContext";
import Home from "./components/home/Home";

const App = () => {
  const [fileData, setFileData] = useState([]);

  return (
    <FileContext.Provider value={{ fileData, setFileData }}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={Uploader} />
        <Route path="/visualize" component={Graph} />
      </BrowserRouter>
    </FileContext.Provider>
  );
};

export default App;
