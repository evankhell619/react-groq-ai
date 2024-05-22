import React from "react";
import { Light } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const History = ({ history }) => (
  <div className="mt-8 w-full">
    <h2 className="text-2xl text-primary font-bold">History</h2>
    <ul>
      {history.map((item, index) => (
        <li key={index} className="mt-4 p-4 border rounded-md bg-primary">
          <div className="font-bold text-primary">Query:</div>
          <div className="mb-2">{item.query}</div>
          <div className="font-bold">Response:</div>
          <div>
            <Light language="swift" style={oneDark} wrapLongLines={true}>
              {item.response}
            </Light>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default History;
