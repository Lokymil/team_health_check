import React, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Uploader from "./components/upload/Uploader";
import Graph from "./components/graph/Graph";
import { FileContext } from "./context/FileContext";
import Theory from "./components/interview/Theory";
import Form from "./components/interview/Form/Form";

const App = () => {
  const [fileData, setFileData] = useState([]);

  return (
    <FileContext.Provider value={{ fileData, setFileData }}>
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/theory" />
        </Route>
        <Route path="/theory" component={Theory} />
        <Route path="/tryit" component={Form} />
        <Route path="/upload" component={Uploader} />
        <Route path="/visualize" component={Graph} />
      </BrowserRouter>
    </FileContext.Provider>
  );
};

export default App;
