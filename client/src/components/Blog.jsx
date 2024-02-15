import React from "react";

const blogs = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "Learn the basics of machine learning and its applications.",
    author: "John Smith",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "The Art of Data Visualization",
    description:
      "Discover the principles of effective data visualization techniques.",
    author: "Emily Johnson",
    date: "2024-01-20",
  },
  {
    id: 3,
    title: "Web Development Trends for 2024",
    description:
      "Explore the latest trends and technologies shaping web development.",
    author: "Michael Brown",
    date: "2024-02-01",
  },
  {
    id: 4,
    title: "Getting Started with React Hooks",
    description:
      "Learn how to use React Hooks to manage state and side effects in functional components.",
    author: "Sarah Adams",
    date: "2024-02-05",
  },
  {
    id: 5,
    title: "Deep Dive into Neural Networks",
    description:
      "Delve into the inner workings of neural networks and deep learning algorithms.",
    author: "David Lee",
    date: "2024-02-10",
  },
  {
    id: 6,
    title: "Tips for Effective Time Management",
    description:
      "Discover strategies and techniques to improve your time management skills.",
    author: "Jessica Clark",
    date: "2024-02-15",
  },
  {
    id: 7,
    title: "Mastering JavaScript Promises",
    description:
      "Learn how to use promises for asynchronous programming in JavaScript.",
    author: "Daniel Wilson",
    date: "2024-02-20",
  },
  {
    id: 8,
    title: "The Power of CSS Grid Layout",
    description:
      "Explore the capabilities of CSS Grid Layout for building modern web layouts.",
    author: "Sophia Martinez",
    date: "2024-02-25",
  },
  {
    id: 9,
    title: "Introduction to Python Programming",
    description:
      "Get started with Python programming language and its fundamentals.",
    author: "Alex Johnson",
    date: "2024-03-05",
  },
  {
    id: 10,
    title: "Tips for Effective Remote Work",
    description:
      "Discover strategies and tools to stay productive while working remotely.",
    author: "Emma Wilson",
    date: "2024-03-10",
  },
];

const Blog = () => {
  return (
    <div className="py-[8rem] mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((item) => (
        <BlogDisplay
          key={item.id}
          title={item.title}
          description={item.description}
          author={item.author}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Blog;

export const BlogDisplay = ({ title, description, author, date, id }) => {
  return (
    <div
      key={id}
      className="bg-white p-6 rounded-md shadow-md border-2 border-gray-200"
    >
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <h4 className="text-sm text-gray-600">{author}</h4>
        <span className="text-sm text-gray-600">{date}</span>
      </div>
    </div>
  );
};
