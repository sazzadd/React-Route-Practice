import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  console.log(post);
  const { id, title, body } = post;
  const handleClick = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div>
      {/* <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">Post #{id}</h2>
      <h3 className="text-lg font-bold text-blue-600 mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{body}</p>
    </div> */}

      <div className="max-w-lg mx-auto my-6 p-6 bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Post #{id}</h2>
          <button className="text-pink-500 hover:text-pink-600 focus:outline-none"></button>
        </div>
        <h3 className="text-xl font-bold text-blue-700 mt-1 mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-2">{body}</p>
        <Link
          to={`/post/${id}`}
          className="mt-6 bg-gradient-to-r mr-2 from-blue-500 to-teal-400 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition duration-200 ease-in-out"
        >
          Read More
        </Link>
        <button
          onClick={handleClick}
          className="inline-block px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 transition-colors duration-200 ease-in-out"
        >
          Show details
        </button>
      </div>
    </div>
  );
};

export default Post;
