import React, { useState } from "react";
import { requestToGroq } from "./utils/groq";
import Title from "./components/Title";
import Form from "./components/Form";
import CodeDisplay from "./components/CodeDisplay";
import History from "./components/History";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (content) => {
    try {
      const ai = await requestToGroq(content);
      setData(ai);
      setHistory((prevHistory) => [
        ...prevHistory,
        { query: content, response: ai },
      ]);
      setError(null);
    } catch (err) {
      setError("An error occurred while fetching the data.");
    }
  };

  return (
    <div className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <Title />
      <Form onSubmit={handleSubmit} />
      {error && <div className="text-red-500">{error}</div>}
      <CodeDisplay data={data} />
      <History history={history} className="text-white color-red" />
    </div>
  );
}

export default App;
