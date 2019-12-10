import React from "react";
import { statsHeaders } from "../../utils";
import "./FileFormat.css";

const FileFormat = () => (
  <div>
    <p>
      Your '.csv' file must have at least 24 columns matching the following
      rules. <br />
      All other columns will be interpreted as filter.
    </p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {statsHeaders.map(statsHeader => (
          <tr key={statsHeader.name}>
            <td>{statsHeader.name}</td>
            <td>{statsHeader.description}</td>
            <td>{statsHeader.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FileFormat;
