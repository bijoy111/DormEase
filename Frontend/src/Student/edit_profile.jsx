import React from 'react';
import { Layout } from '../Layout/layout.jsx';

// Dummy student data
const student = {
    stu_id: 1905024,
    name: "Rakib Ahsan",
    dept: "Computer Science",
    level_term: "4th Year",
    email: "rakib@example.com",
    password: "********", // Typically not shown
    room_no: "C-102",
    hall: "Hall A",
    resident_status: "On Campus",
    phone_no: "123-456-7890",
    photo: "photo_url"
};

export function EditProfile() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Layout>
            <div className="p-4 max-w-4xl mx-auto">
                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                        <div className='col-span-1 justify-center'>
                            <div className="mb-2">
                                <label className="block mb-1 text-gray-500">Student ID</label>
                                <input type="text" value={student.stu_id} readOnly className="border p-2 w-full text-gray-500" />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1 text-gray-500">Name</label>
                                <input type="text" value={student.name} readOnly className="border p-2 w-full text-gray-500" />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1 text-gray-500">Department</label>
                                <input type="text" value={student.dept} readOnly className="border p-2 w-full text-gray-500" />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1 text-gray-500">Level/Term</label>
                                <input type="text" value={student.level_term} readOnly className="border p-2 w-full text-gray-500" />
                            </div>
                        </div>
                        <div className='col-span-1 justify-center'>
                            <div className="mb-2">
                                <label className="block mb-1 text-gray-500">Hall</label>
                                <input type="text" value={student.hall} readOnly className="border p-2 w-full text-gray-500" />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1 text-gray-500">Resident Status</label>
                                <input type="text" value={student.resident_status} readOnly className="border p-2 w-full text-gray-500" />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1 text-gray-500">Room No.</label>
                                <input type="text" value={student.room_no} readOnly className="border p-2 w-full text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1 ">Email</label>
                        <input type="email" defaultValue={student.email} className="border p-2 w-full hover:border-black" />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1 ">Password</label>
                        <input type="password" defaultValue={student.password} className="border p-2 w-full hover:border-black" />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">Phone No.</label>
                        <input type="text" defaultValue={student.phone_no} className="border p-2 w-full hover:border-black" />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1 ">Photo</label>
                        <input type="text" defaultValue={student.photo} className="border p-2 w-full hover:border-black" />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
                    </div>
                </form>
            </div >
        </Layout >
    );
};
