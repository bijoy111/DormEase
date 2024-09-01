import axios from "axios";
import { React, useState } from "react";
import { Layout } from "../Layout/layout.jsx";

export function Dashboard() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitClick = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Create an object with the email and password
        const formData = {
            id: id,
            password: password
        };

        const response = await axios.post('http://localhost:3000/auth/login', formData, { withCredentials: true });

        if (response.status === 200) {
            console.log('Login successful');
            // window.open('/dashboard', '_self');
        }
        else {
            console.log('Login failed');
        }

    }

    return (
        <Layout>
            <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-6 p-4 md:p-6 md:pt-0">
                {/* Top row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="md:col-span-2 basic-card flex flex-col">
                        <div className="flex items-start mb-2">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Student"
                                className="w-40 h-40 rounded-full mr-10"
                            />
                            <div>
                                <h2 className="text-5xl font-bold">John Doe</h2>
                                <p className="text-gray-800 text-2xl pb-2">12345678</p>
                                <p className="text-gray-600 text-lg">CSE</p>
                                <p className="text-gray-600 text-lg">Level: 3, Term: 2</p>
                            </div>
                        </div>
                        <div class="flex items-baseline mt-10">
                            <button className="basic-btn">
                                Edit Profile
                            </button>
                        </div>

                    </div>
                    <div className="md:col-span-1 basic-card">
                        <div class="flex ml-4">
                            <div class="bg-black">
                                <h1 class="uppercase text-white px-2">resident</h1>
                            </div>
                        </div>
                        <div className="flex w-full h-32 py-6">
                            <div className="flex-none w-2/5 p-4 align-middle justify-center">
                                <div className="text-left">
                                    <h1 class="text-xl">Room no:</h1>
                                </div>
                            </div>
                            <div className="flex-grow w-3/5 p-4">
                                <div className="text-center">
                                    <h1 class="text-6xl font-bold">409</h1>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-evenly mt-5">
                            <div>
                                <button class="basic-btn">Change Room</button>
                            </div>
                            <div>
                                <button class="basic-btn">Leave Room</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="basic-card">
                        <div>
                            <h1 class="uppercase text-xl font-semibold text-center pb-2 border-b-2">Today's Menu</h1>
                        </div>
                        <div class="mt-6">
                            <h1 class="text-xl font-semibold text-center">Lunch</h1>
                            <p class="text-lg text-center p-2">Rice, Fish Curry, Salad</p>
                        </div>
                        <div class="mt-5">
                            <h1 class="text-xl font-semibold text-center">Dinner</h1>
                            <p class="text-lg text-center p-2">Rice, Chicken Curry, Salad</p>
                        </div>
                    </div>
                    <div className="basic-card">
                        <div>
                            <h1 class="uppercase text-xl font-semibold text-center pb-2 border-b-2">Complaint Update</h1>
                        </div>
                        <div class="flex w-full mt-6 bg-gray-100 border rounded justify-center">
                            <div className="flex-1 ml-2 text-left font-semibold">
                                Issue with the water supply<br />
                                <span class="text-sm text-gray-500 font-thin">Submitted 2 days ago</span>
                            </div>
                            <div className="flex-1 mr-2 text-right font-bold">
                                Resolved
                            </div>
                        </div>
                    </div>

                    <div className="basic-card">
                        <h2 className="text-xl font-semibold mb-4">Bottom Center</h2>
                        <p>Content for bottom center grid item</p>
                    </div>
                </div>
            </div>
        </Layout >
    );
}