import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const navigate = useNavigate()
    const post = useLoaderData();
    const backHandle = () => {
        navigate(-1);
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center py-12 px-4">
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">
                <h1 className="text-sm text-gray-400 uppercase tracking-wide mb-1">Post ID: {post.id}</h1>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{post.body}</p>
                <button
                    onClick={backHandle}
                    className="px-8 py-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold text-lg rounded-full shadow-lg shadow-pink-500/50 hover:shadow-pink-700/50 transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gradient-to-l"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default PostDetails; <h1>hellow:</h1>