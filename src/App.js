import React, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Uploader from "./components/upload/Uploader";
import Graph from "./components/graph/Graph";
import { FileContext } from "./context/FileContext";
import Theory from "./components/interview/Theory";
import Form from "./components/interview/Form/Form";
import "./App.css";
import Layout from "./components/layout/Layout";
import ScrollToTopOnNavigate from "./components/navigation/ScrollToTopOnNavigate";

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
