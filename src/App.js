import React, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Uploader from "./components/upload/Uploader";
import Graph from "./components/graph/Graph";
import { FileContext } from "./context/FileContext";

const App = () => {
  const [fileData, setFileData] = useState([]);

  return (
    <FileContext.Provider value={{ fileData, setFileData }}>
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/load" />
        </Route>
        <Route path="/load" component={Uploader} />
        <Route path="/visualize" component={Graph} />
      </BrowserRouter>
    </FileContext.Provider>
  );
};

export default App;
