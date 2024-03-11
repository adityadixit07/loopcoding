import React from "react";

const BlogDetailsWithSuggestion = () => {
  const mainBlog = {
    id: 1,
    title: "Main Blog Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ex sit amet leo porttitor consequat. Fusce id urna nec velit facilisis blandit. Nullam finibus purus ac urna luctus, nec feugiat lorem pharetra. Integer in tortor nec metus faucibus iaculis. Sed malesuada felis ac quam pharetra fermentum. Nam sit amet malesuada sapien. Sed eu libero vel libero convallis tempor sit amet at nulla. Donec non ligula et ante consequat bibendum. Aliquam erat volutpat.",
    author: "John Doe",
    date: "March 20, 2024",
  };

  const suggestedBlogs = [
    { id: 2, title: "Suggested Blog 1" },
    { id: 3, title: "Suggested Blog 2" },
    { id: 4, title: "Suggested Blog 3" },
  ];

  return (
    <div className="container mx-auto mt-8 flex pt-36">
      {/* Main Blog Content */}
      <div className="w-3/4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">{mainBlog.title}</h2>
          <p className="text-gray-700 mb-4">{mainBlog.content}</p>
          <p className="text-gray-600">
            <span className="font-semibold">Author:</span> {mainBlog.author} |{" "}
            <span className="font-semibold">Date:</span> {mainBlog.date}
          </p>
        </div>
      </div>

      {/* Suggested Blogs Sidebar */}
      <div className="w-1/4 ml-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Suggested Blogs</h3>
          {suggestedBlogs.map((blog) => (
            <div key={blog.id} className="border-b border-gray-200 mb-4 pb-4">
              <h4 className="text-lg font-semibold mb-2">{blog.title}</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsWithSuggestion;
