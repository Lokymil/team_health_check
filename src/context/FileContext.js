import React, { createContext, useContext, useState } from "react";

const FileContext = createContext();

export function FileContextProvider({ initialData = [], children }) {
  const [fileData, setFileData] = useState(initialData);

  return (
    <FileContext.Provider value={{ fileData, setFileData }}>
      {children}
    </FileContext.Provider>
  );
}

export function useFileContext() {
  const fileContext = useContext(FileContext);

  if (!fileContext) {
    throw new Error(
      "useFileContext must be used within a FileContext.Provider"
    );
  }

  return fileContext;
}
