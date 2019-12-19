import { BrowserRouter, Redirect, Route } from "react-router-dom";
import React, { useState } from "react";

import { FileContext } from "./context/FileContext";
import Form from "./components/interview/Form/Form";
import Graph from "./components/graph/Graph";
import Layout from "./components/layout/Layout";
import ScrollToTopOnNavigate from "./components/navigation/ScrollToTopOnNavigate";
import Theory from "./components/interview/Theory";
import Uploader from "./components/upload/Uploader";

import "./App.scss";

const App = () => {
  const [fileData, setFileData] = useState([]);

  return (
    <FileContext.Provider value={{ fileData, setFileData }}>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Layout>
          <Route exact path="/">
            <Redirect to="/interview/theory" />
          </Route>
          <Route path="/interview/theory" component={Theory} />
          <Route path="/interview/tryit" component={Form} />
          <Route exact path="/visualize">
            <Redirect to="/visualize/upload" />
          </Route>
          <Route path="/visualize/upload" component={Uploader} />
          <Route path="/visualize/graph" component={Graph} />
        </Layout>
      </BrowserRouter>
    </FileContext.Provider>
  );
};

export default App;
