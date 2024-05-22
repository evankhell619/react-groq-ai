import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Form = ({ onSubmit }) => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(content);
    setIsSubmitting(false);
  };

  return (
    <form className="flex flex-col gap-4 py-4 w-full" onSubmit={handleSubmit}>
      <input
        className="py-2 px-4 text-md rounded-md"
        placeholder="Write something here ..."
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isSubmitting}
      />
      <button
        className={`font-bold py-2 px-4 text-white rounded-md ${
          isSubmitting ? "bg-gray-500" : "bg-primary"
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
      {isSubmitting && <LoadingSpinner />}
    </form>
  );
};

export default Form;
