import React, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Uploader from "./components/upload/Uploader";
import Graph from "./components/graph/Graph";
import { FileContext } from "./context/FileContext";
import Interview from "./components/interview/Interview";

const App = () => {
  const [fileData, setFileData] = useState([]);

  return (
    <FileContext.Provider value={{ fileData, setFileData }}>
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/interview" />
        </Route>
        <Route path="/interview" component={Interview} />
        <Route path="/upload" component={Uploader} />
        <Route path="/visualize" component={Graph} />
      </BrowserRouter>
    </FileContext.Provider>
  );
};

export default App;
