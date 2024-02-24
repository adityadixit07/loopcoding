import React from "react";

const CourseForm = () => {
  return (
    <div className="pt-[6rem]">
      <div className="container max-w-[800px] mx-auto flex items-center flex-col justify-center bg-gray-100 p-8 rounded-md shadow-md sm:w-full md:w-96 lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Add Course</h1>
        <form action="">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="mb-4 p-2 outline-none border border-orange-500 rounded-md w-full"
              placeholder="Add course title.."
            />{" "}
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="mb-4 p-2 outline-none border border-orange-500 rounded-md w-full"
              placeholder="Add course title.."
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              rows={5}
              name="description"
              id="description"
              required
              className="mb-4 p-2 outline-none border border-orange-500 rounded-md w-full resize-none"
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
              className="mb-4 p-2 outline-none border border-orange-500 rounded-md w-full"
              placeholder="Add course price.."
            />
          </div>
          <div>
            <label htmlFor="discount">Discount</label>
            <input
              type="number"
              name="discount"
              id="discount"
              required
              className="mb-4 p-2 outline-none border border-orange-500 rounded-md w-full"
              placeholder="Add course discount.."
            />
          </div>
          <div>
            <label
              htmlFor="videos"
              className="text-black rounded-md py-1 w-full border border-blue-700"
            >
              Videos
            </label>
            <input
              type="file"
              name="videos"
              id="videos"
              required
              className="hidden"
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
    </div>
  );
};

export default CourseForm;
