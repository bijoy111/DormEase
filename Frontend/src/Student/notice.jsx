import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout } from "../Layout/layout.jsx";

const Comment = ({ comment }) => (
    <div className="bg-gray-50 p-3 rounded-lg mb-2">
        <div className="flex items-center mb-2">
            <img src={comment.student.photo} alt={comment.student.name} className="w-8 h-8 rounded-full mr-2" />
            <span className="font-semibold">{comment.student.name}</span>
        </div>
        <p className="text-sm">{comment.description}</p>
        <p className="text-xs text-gray-500 mt-1">{new Date(comment.created_at).toLocaleString()}</p>
    </div>
);

const Notice = ({ notice }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
            <div className="p-4">
                <h2 className="text-3xl font-bold mb-1">{notice.title}</h2>
                <div className="flex">
                    <div><p className="text-xs text-gray-500 py-1 mb-2">Posted on: {new Date(notice.created_at).toLocaleString()}</p></div>
                    <div className="ml-4">
                        {notice.is_private && (
                        <div className="mb-2">
                            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">Private</span>
                        </div>
                        )}
                    </div>
                </div>
                
                <p className="mt-2 mb-2">{notice.description}</p>
                {notice.students && notice.students.length > 0 && (
                    <div className="flex items-center mb-2">
                        <span className="mr-2">For:</span>
                        {notice.students.map((student, index) => (
                            <div key={student.stu_id} className="flex items-center mr-2">
                                <img src={student.photo} alt={student.name} className="w-6 h-6 rounded-full mr-1" />
                                <span className="text-sm">{student.name}</span>
                                {index < notice.students.length - 1 && <span className="ml-1">,</span>}
                            </div>
                        ))}
                    </div>
                )}
                {notice.media && notice.media.length > 0 && (
                    <img src={notice.media[0]} alt={notice.title} className="w-full h-48 object-cover mb-2 rounded" />
                )}
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="text-blue-500 hover:text-blue-600"
                >
                    {showComments ? 'Hide Comments' : 'Show Comments'}
                </button>
                <div className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${showComments ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {notice.comments.map(comment => (
                        <Comment key={comment.comment_id} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export function Notices() {
    const [notices, setNotices] = useState([
        {
            "post_id": 8,
            "title": "Show Cause Notice",
            "description": "Dear student, you have to show cause for violating the hall rules by the next 3 days.",
            "created_at": "2024-06-23T13:05:17.326124+00:00",
            "is_private": true,
            "students": [
                {
                    "name": "Al Amin Sany",
                    "photo": "https://via.placeholder.com/40",
                    "stu_id": 1905048
                },
                {
                    "name": "Rakib Ahsan",
                    "photo": "https://via.placeholder.com/40",
                    "stu_id": 1905024
                },
            ],
            "media": [],
            "comments": [] // Add some sample comments if needed
        },
        {
            "post_id": 9,
            "title": "Show Cause Notice",
            "description": "Dear student, you have to show cause for violating the hall rules by the next 3 days.",
            "created_at": "2024-06-23T13:05:17.326124+00:00",
            "is_private": false,
            "students": [],
            "media": [],
            "comments": [
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
            ] // Add some sample comments if needed
        }
        // Add more notices as needed
    ]);

    const [filter, setFilter] = useState('all'); // 'all', 'public', or 'private'

    const filteredNotices = notices.filter(notice => {
        if (filter === 'all') return true;
        if (filter === 'public') return !notice.is_private;
        if (filter === 'private') return notice.is_private;
    });

    return (
        <Layout>
            <div className="max-w-4xl mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold"></h1>
                    <div>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="p-2 border rounded"
                        >
                            <option value="all">All Notices</option>
                            <option value="public">Public Notices</option>
                            <option value="private">Private Notices</option>
                        </select>
                    </div>
                </div>
                {filteredNotices.map(notice => (
                    <Notice key={notice.post_id} notice={notice} />
                ))}
            </div>
        </Layout>
    );
};
