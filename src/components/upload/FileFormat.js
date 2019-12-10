import React from "react";
import { statsHeaders } from "../../utils";

const FileFormat = () => (
  <div>
    <table>
      <tr>
        <th>Name</th>
        {statsHeaders.map(statsHeader => (
          <td>{statsHeader.name}</td>
        ))}
      </tr>
      <tr>
        <th>Description</th>
        {statsHeaders.map(statsHeader => (
          <td>{statsHeader.description}</td>
        ))}
      </tr>
      <tr>
        <th>Type</th>
        {statsHeaders.map(statsHeader => (
          <td>{statsHeader.type}</td>
        ))}
      </tr>
    </table>
  </div>
);

export default FileFormat;
