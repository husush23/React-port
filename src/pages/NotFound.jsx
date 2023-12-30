import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-4xl font-bold">404 - Not Found</h2>
        <p className="text-gray-700">
          Sorry, the page you are looking for might not exist.
        </p>
        <p className="text-gray-700">
          Go back to{" "}
          <Link to="/" className="text-blue-300">
            Home
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
