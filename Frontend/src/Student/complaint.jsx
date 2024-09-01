import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout } from "../Layout/layout.jsx";

const Complaint = ({ complaint, onUpdateStatus }) => {
    const stages = ['submitted', 'seen', 'in process', 'completed'];
    const currentIndex = stages.indexOf(complaint.status);

    return (
        <div className="bg-white rounded-lg shadow-md mb-4 p-4">
            <h2 className="text-xl font-semibold mb-2">{complaint.title}</h2>
            <p className="mb-2">{complaint.description}</p>
            <p className="text-sm text-gray-500 mb-1">Created: {new Date(complaint.created_at).toLocaleString()}</p>
            <p className="text-sm text-gray-500 mb-2">Last Modified: {new Date(complaint.last_modified).toLocaleString()}</p>
            {/* <ProgressBar status={complaint.status} /> */}

            <div className="flex justify-between mb-4">
                {stages.map((stage, index) => (
                    <div key={stage} className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full border-gray-700 border-2 ${index <= currentIndex ? 'bg-green-500' : 'bg-gray-300'}`}>
                            <button className="w-6 h-6 rounded-full" value={stages.indexOf(stage)} onClick={(e) => { onUpdateStatus(complaint.complaint_id, stages[e.target.value]) }}></button>
                        </div>
                        <span className="text-xs mt-1">{stage}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ComposeComplaint = ({ isOpen, onClose, onSubmit }) => {
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

export function Complaints() {
    const [complaints, setComplaints] = useState([
        {
            "complaint_id": 4,
            "stu_id": 1905024,
            "title": "Issue with the heater",
            "description": "The heater in my room is not working properly.",
            "created_at": "2024-06-23T06:36:24.393354+00:00",
            "status": "in process",
            "last_modified": "2024-06-23T06:36:24.393354+00:00",
            "student": {
                "name": "Rakib Ahsan",
                "photo": "https://via.placeholder.com/40",
                "stu_id": 1905024
            }
        },
        {
            "complaint_id": 5,
            "stu_id": 1905024,
            "title": "Issue with the heater",
            "description": "The heater in my room is not working properly.",
            "created_at": "2024-06-23T06:36:24.393354+00:00",
            "status": "in process",
            "last_modified": "2024-06-23T06:36:24.393354+00:00",
            "student": {
                "name": "Rakib Ahsan",
                "photo": "https://via.placeholder.com/40",
                "stu_id": 1905024
            }
        },
        {
            "complaint_id": 6,
            "stu_id": 1905024,
            "title": "Issue with the heater",
            "description": "The heater in my room is not working properly.",
            "created_at": "2024-06-23T06:36:24.393354+00:00",
            "status": "in process",
            "last_modified": "2024-06-23T06:36:24.393354+00:00",
            "student": {
                "name": "Rakib Ahsan",
                "photo": "https://via.placeholder.com/40",
                "stu_id": 1905024
            }
        },
        {
            "complaint_id": 4,
            "stu_id": 1905024,
            "title": "Issue with the heater",
            "description": "The heater in my room is not working properly.",
            "created_at": "2024-06-23T06:36:24.393354+00:00",
            "status": "in process",
            "last_modified": "2024-06-23T06:36:24.393354+00:00",
            "student": {
                "name": "Rakib Ahsan",
                "photo": "https://via.placeholder.com/40",
                "stu_id": 1905024
            }
        },

        // Add more complaints as needed
    ]);

    const [isComposeOpen, setIsComposeOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true); // Set this based on user role

    const handleUpdateStatus = (complaintId, newStatus) => {
        setComplaints(complaints.map(complaint =>
            complaint.complaint_id === complaintId
                ? { ...complaint, status: newStatus, last_modified: new Date().toISOString() }
                : complaint
        ));
    };

    const handleCreateComplaint = (newComplaint) => {
        const complaint = {
            complaint_id: Date.now(),
            stu_id: 1905024, // This should be the current user's ID
            ...newComplaint,
            created_at: new Date().toISOString(),
            status: "submitted",
            last_modified: new Date().toISOString(),
            student: {
                name: "Current User", // This should be the current user's name
                photo: "https://via.placeholder.com/40",
                stu_id: 1905024 // This should be the current user's ID
            }
        };
        setComplaints([complaint, ...complaints]);
    };

    return (
        <Layout>
            <div className={`max-w-4xl mx-auto p-4 ${isComposeOpen ? 'blur-sm' : ''}`}>
                <div className="flex flex-col" style={{ height:'calc(100vh - 180px)' }}>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold"></h1>
                        <button
                            onClick={() => setIsComposeOpen(true)}
                            className="basic-btn"
                        >
                            Create Complaint
                        </button>
                    </div>
                    <div className="flex-1 overflow-auto mt-4">
                        {complaints.map(complaint => (
                            <Complaint
                                key={complaint.complaint_id}
                                complaint={complaint}
                                onUpdateStatus={isAdmin ? handleUpdateStatus : null}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ComposeComplaint
                isOpen={isComposeOpen}
                onClose={() => setIsComposeOpen(false)}
                onSubmit={handleCreateComplaint}
            />
        </Layout>
    );
};
