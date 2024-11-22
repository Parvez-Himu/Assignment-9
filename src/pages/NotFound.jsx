import NotFoundImg from "../assets/images/not-found.svg";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-700 text-center text-white">
      <div className="p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg max-w-md">
        <img 
          src={NotFoundImg} 
          alt="404 Not Found" 
          className="mx-auto w-60 mb-6" 
        />
        <h1 className="text-5xl font-extrabold mb-4">Page Not Found</h1>
        <p className="text-lg font-medium text-gray-200">
          Sorry, we couldn't find the page you were looking for.
        </p>
        <p className="mt-2 text-gray-300">
          The link might be broken, or the page may have been removed. Double-check the URL or navigate back to the homepage.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block px-6 py-3 font-semibold bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
