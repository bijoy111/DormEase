import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar.js";
import './notice.css';

export function Notice() {
    const [notices, setNotices] = useState([]); // State to store fetched notices
    const [isModalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [is_private, setIsPrivate] = useState(false);
    const [students, setStudents] = useState(''); // State to store students

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    // Function to fetch notices from backend
    const fetchNotices = async () => {
        try {
            const response = await fetch('http://localhost:3000/notice', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const data = await response.json();
            console.log(data);
            setNotices(data);
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleStudentsChange = (event) => {
        setStudents(event.target.value);
    };

    const student_list_stringify = (student_list) => {
        let str = '';
        for (let i = 0; i < student_list.length; i++) {
            str += student_list[i].stu_id;
            if (i !== student_list.length - 1) {
                str += ', ';
            }
        }
        return str;
    }

    const composeNotice = async () => {
        let list = [];

        if (is_private) {
            // add to array from comma separated string
            list = students.split(',');
            list = list.map((item) => item.trim());

            // delete empty strings and non-numeric strings
            list = list.filter((item) => item !== '' && !isNaN(item));
            list = list.map((item) => parseInt(item));
        }

        let obj = {
            title: title,
            text: content,
            is_private: is_private,
            student_list: is_private ? list : []
        }

        const response = await axios.post('http://localhost:3000/notice/compose', obj, { withCredentials: true });
        fetchNotices();
        setIsPrivate(false);
        setStudents('');
        closeModal();
    }

    const removeNotice = async (post_id) => {
        const response = await axios.delete(`http://localhost:3000/notice/${post_id}`, { withCredentials: true });
        console.log(response);
        fetchNotices();
    }

    useEffect(() => {
        fetchNotices(); // Fetch notices when component mounts
    }, []);


    return (
        <div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-100 ease-in-out">
                    <div className="bg-white p-8 rounded shadow-md w-6/12">
                        <div class="pt-4 pb-3">
                            <label class="block text-2xl font-medium text-gray-800 mb-1">Title</label>
                            <input type="text" onChange={handleTitleChange} class="flex w-full p-2 border-2 border-gray-600 rounded-lg shadow-md focus:outline-none focus:border-purple-600 focus:ring-1" />
                        </div>
                        <div class="pt-2 pb-3">
                            <div class="mb-6">
                                <label for="content" class="block text-2xl font-medium text-gray-800 mb-1">Content</label>
                                <textarea id="content" onChange={handleContentChange} name="content" class="flex w-full p-2 border-2 border-gray-600 rounded-lg shadow-md focus:outline-none focus:border-purple-600 focus:ring-1" rows="6" required ></textarea>
                            </div>

                            <div class="mb-2">
                                <input type="checkbox" class="mr-3" checked={is_private} onChange={() => setIsPrivate(!is_private)} />
                                <span>Private Notice</span>
                            </div>

                            <div class="mb-6">
                                <label for="content" class="block text-xl font-medium text-gray-800 mb-1">Student List</label>
                                <input onChange={handleStudentsChange} disabled={!is_private} name="content" class="flex w-full p-2 border-2 border-gray-600 rounded-lg shadow-md focus:outline-none focus:border-purple-600 focus:ring-1" />
                            </div>

                            <div class="flex">
                                <button type="submit" onClick={composeNotice} class="px-6 py-2 w-full bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Submit</button>
                            </div>

                            <div class="flex">
                                <button onClick={closeModal} class="mt-2 px-6 py-2 w-full bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div class={`transition-all duration-100 ease-in-out ${isModalOpen ? 'filter blur-sm pointer-events-none' : ''}`}>
                <div class={`grid grid-cols-5`}>
                    <div class="col-span-1 ">
                        <Navbar />
                    </div>
                    <div class="col-span-4 px-2 mr-20">
                        <div class="flex pt-2 pb-3 px-2 border-b-2">
                            <div class="flex mt-2 h-16 w-3 bg-blue-500 mr-5"></div>
                            <div>
                                <p class="text-7xl font-semi-bold">Notice</p>
                            </div>

                        </div>

                        <div class="flex justify-end mt-3">
                            <button class="px-10 py-3 font-white rounded-full bg-green-400 transition-colors hover:bg-green-600" onClick={openModal}>
                                <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                <text class="px-1 text-lg font-bold align-middle">
                                    Create
                                </text>
                            </button>
                        </div>

                        <div className="notices">
                            {notices.map((notice) => (
                                <div key={notice.id} class="mt-3 border-gray-200 border-2 shadow-lg rounded-b-2xl">
                                    <div className="flex border-b-2 w-full items-center justify-between p-3">
                                        <div>
                                            <p className="text-2xl font-bold">{notice.title}</p>
                                            <p className="text-sm">{notice.created_at}</p>
                                            {/*loop through student_list */}
                                            <p className="text-sm mt-2" style={{ color: 'red' }}>
                                                <b>{notice.student_list && notice.student_list.length > 0 ?
                                                    notice.student_list.map(student => student.stu_id).join(', ') : ''}</b>
                                            </p>
                                        </div>
                                        <div>
                                            <button onClick={() => removeNotice(notice.post_id)} className="bg-red-600 text-white py-1 px-3 hover:bg-red-700 rounded-sm">Remove</button>
                                        </div>
                                    </div>
                                    <div class="p-3">
                                        <p>
                                            {notice.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
}
