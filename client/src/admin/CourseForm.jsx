import React from "react";

const CourseForm = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add Course</h1>
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="mb-4 p-2 border rounded-md w-full"
            placeholder="Add course title.."
          />{" "}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="mb-4 p-2 border rounded-md w-full"
            placeholder="Add course title.."
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            required
            className="mb-4 p-2 border rounded-md w-full"
            placeholder="Add course description.."
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            className="mb-4 p-2 border rounded-md w-full"
            placeholder="Add course price.."
          />
        </div>
        {/* uplaod vides and images */}
        <div>
          <label htmlFor="video">Video</label>
          <input
            type="file"
            name="video"
            id="video"
            required
            className="mb-4 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            required
            className="mb-4 p-2 border rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md relative"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
