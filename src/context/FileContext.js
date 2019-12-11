import React, { createContext } from "react";

export const FileContext = createContext({});

export const withFileContext = Component => ownProps => (
  <FileContext.Consumer>
    {({ fileData, setFileData }) => (
      <Component {...ownProps} fileData={fileData} setFileData={setFileData} />
    )}
  </FileContext.Consumer>
);
