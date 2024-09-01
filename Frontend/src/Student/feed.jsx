import axios from "axios";
import { React, useState } from "react";
import { Layout } from "../Layout/layout.jsx";

const Comment = ({ comment }) => (
    <div className="bg-gray-50 p-3 rounded-lg mb-2">
        <div className="flex items-center mb-2 pb-2 border-b-2">
            <img src={comment.student.photo} alt={comment.student.name} className="w-10 h-10 rounded-full mr-2" />
            <div>
                <h3 className="font-semibold">{comment.student.stu_id} - {comment.student.name}</h3>
                <span className="text-xs text-gray-500 mt-1">{new Date(comment.created_at).toLocaleString()}</span>
            </div>
        </div>
        <p>{comment.description}</p>
    </div>
);

const Post = ({ post }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className="bg-white bg: w-full rounded-lg shadow-md mb-4 overflow-hidden">
            <div className="flex">
                {/* Voting */}
                <div className="flex flex-col items-center justify-start p-2 bg-gray-50">
                    <button className="text-gray-500 hover:text-orange-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                        </svg>
                    </button>
                    <span className="my-1 font-bold">{post.upvotes - post.downvotes}</span>
                    <button className="text-gray-500 hover:text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                    <div className="flex items-center mb-2 pb-2 border-b-2">
                        <img src={post.student.photo} alt={post.student.name} className="w-15 h-15 rounded-full mr-2" />
                        <div>
                            <h3 className="text-lg font-semibold">{post.student.stu_id} - {post.student.name}</h3>
                            <span className="text-xs text-gray-500">{new Date(post.created_at).toLocaleString()}</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                    <p className="mb-2">{post.description}</p>
                    {post.media.length > 0 && (
                        <img src={post.media[0]} alt={post.title} className="w-full h-48 object-cover mb-2 rounded" />
                    )}
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        {post.comments.length} comments
                    </div>
                    <button
                        onClick={() => setShowComments(!showComments)}
                        className="text-blue-500 hover:text-blue-600"
                    >
                        {showComments ? 'Hide Comments' : 'Show Comments'}
                    </button>
                    <div className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${showComments ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        {post.comments.map(comment => (
                            <Comment key={comment.comment_id} comment={comment} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ComposeWindow = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description });
        setTitle('');
        setDescription('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-3xl mb-8">Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <input class="input-box rounded-lg"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <textarea class="input-box h-32 rounded-lg"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 mb-4 border rounded h-32"
                        required
                    />
                    <div className="">
                        <button type="submit" className="basic-btn w-full mb-2">
                            Post
                        </button>
                        <button type="button" onClick={onClose} className="basic-btn w-full">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export function Feed() {
    const [isComposeOpen, setIsComposeOpen] = useState(false);

    const handleCreatePost = (newPost) => {
    };

    const posts = [
        {
            post_id: 2,
            student: {
                name: "Rakib Ahsan",
                photo: "https://via.placeholder.com/40",
                stu_id: 1905024
            },
            title: "Urgent Blood Needed!",
            description: "A student needs blood urgently. Blood group: B-ve. Contact 0123456789 for more information",
            created_at: "2024-06-23T06:58:31.135659+00:00",
            media: [],
            comments: [
                {
                    comment_id: 2,
                    post_id: 2,
                    stu_id: 1905024,
                    description: "Blood has been managed. Thank you.",
                    created_at: "2024-06-23T08:21:08.915998+00:00",
                    student: {
                        name: "Rakib Ahsan",
                        photo: "https://via.placeholder.com/40",
                        stu_id: 1905024
                    }
                }
            ],
            upvotes: 1,
            downvotes: 0,
            voted: null
        },
        {
            post_id: 2,
            student: {
                name: "Rakib Ahsan",
                photo: "https://via.placeholder.com/40",
                stu_id: 1905024
            },
            title: "Urgent Blood Needed!",
            description: "A student needs blood urgently. Blood group: B-ve. Contact 0123456789 for more information",
            created_at: "2024-06-23T06:58:31.135659+00:00",
            media: [],
            comments: [
                {
                    comment_id: 2,
                    post_id: 2,
                    stu_id: 1905024,
                    description: "Blood has been managed. Thank you.",
                    created_at: "2024-06-23T08:21:08.915998+00:00",
                    student: {
                        name: "Rakib Ahsan",
                        photo: "https://via.placeholder.com/40",
                        stu_id: 1905024
                    }
                }
            ],
            upvotes: 1,
            downvotes: 0,
            voted: null
        },
        // Add more posts as needed
    ];

    return (
        <Layout>
            <div className={`max-w-4xl mx-auto p-4 ${isComposeOpen ? 'blur-sm' : ''}`}>
                {/* Create button */}
                <div className="fixed bottom-16 md:right-44 sm:right-20 z-10">
                    <button
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300"
                        onClick={() => setIsComposeOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="0" x2="12" y2="50"></line>
                            <line x1="0" y1="12" x2="50" y2="12"></line>
                        </svg>
                    </button>
                </div>

                {/* Posts */}
                {posts.map(post => (
                    <Post key={post.post_id} post={post} />
                ))}
            </div>

            {}
            <ComposeWindow
                isOpen={isComposeOpen}
                onClose={() => setIsComposeOpen(false)}
                onSubmit={handleCreatePost}
            />
        </Layout>
    );
};
