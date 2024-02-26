const InstructorProfile = () => {
  return (
    <div className=" mx-auto py-[8rem] px-4">
      <div className="mb-8 md:mr-8 md:mb-0">
        <img
          src="https://res.cloudinary.com/dagberjs9/image/upload/v1704880374/eew6mkpxvoo5qlzosxzm.jpg"
          alt="Avatar"
          className="h-40 w-40 md:h-auto md:w-60 rounded-full object-cover mx-auto"
        />
      </div>
      <div className="md:flex md:items-center md:justify-evenly max-w-[1300px] mx-auto">
        {/* Information */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2 py-1">
            Aditya Dixit
          </h1>
          <p className="text-gray-900 text-lg mb-4">
            About: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, nobis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Amet, iure. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam aut cupiditate voluptas impedit? lorem12
          </p>
          <p className="text-gray-900 text-lg mb-4">Email: aditya@gmail.com</p>
          <p className="text-gray-900 text-lg mb-4">Experience: 1 year</p>
          <a
            href="https://personalwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline text-lg"
          >
            Website: personalwebsite.com
          </a>
        </div>
      </div>
      {/* Courses */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-center py-1">Courses</h2>
      </div>
    </div>
  );
};

export default InstructorProfile;
