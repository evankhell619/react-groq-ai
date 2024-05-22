import React, { useState, useEffect } from "react";
import { Light } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeDisplay = ({ data, language = "swift" }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (data) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [data]);

  return (
    <div className="max-w-xl w-full mx-auto">
      <div
        className={`transition-opacity duration-1000 ${
          isAnimating ? "opacity-100" : "opacity-100"
        }`}
      >
        {data && (
          <Light language={language} style={oneDark} wrapLongLines={true}>
            {data}
          </Light>
        )}
      </div>
    </div>
  );
};

export default CodeDisplay;
