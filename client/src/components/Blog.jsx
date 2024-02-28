import React, { useState } from "react";
import toast from "react-hot-toast";
const Blog = () => {
  return (
    <div className="py-[8rem] mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <BlogWriteUsingChatGpt />
      </div>
    </div>
  );
};

export default Blog;

export const BlogWriteUsingChatGpt = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [suggestedText, setsuggestedText] = useState("");
  const [isSuggested, setIsTranslated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleTranslate = () => {
    toast.success(
      "Blog translation is not available in this demo. Please check the source code for the implementation."
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <div>
        <label htmlFor="description" className="block mb-2">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter text to translate"
          name="description"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />{" "}
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <input
          type="text"
          placeholder="Enter text to translate"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleTranslate}
          disabled={isLoading}
          className={`w-full bg-blue-500 text-white font-semibold py-2 rounded-md ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Generating Suggestion..." : "Generate Suggestions"}
        </button>
      </div>

      {isSuggested && (
        <div className="mt-4">
          <p className="text-lg font-medium">Suggested Text:</p>
          <p className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-2">
            {suggestedText}
          </p>
        </div>
      )}
    </div>
  );
};
