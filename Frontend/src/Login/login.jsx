import axios from "axios";
import { React, useState } from "react";

export function LoginCard() {
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
        <div class="grid grid-cols-3 w-screen h-screen">
            <div class="col-span-2 bg-slate-600 w-full"></div>

            <div class="col-span-1">
                <div class="flex justify-center items-center h-screen">
                    <div class="w-full max-w-md">
                        <div class="bg-white p-8 rounded-lg">
                            <h1 class="text-3xl font-bold text-gray-800">Login</h1>
                            <form class="mt-6" onSubmit={handleSubmitClick}>
                                <div class="mb-5">
                                    <label for="id" class="block text-gray-600">ID</label>
                                    <input type="text" onChange={(e) => setId(e.target.value)} class="w-full p-2 border border-gray-300 rounded mt-1" />
                                </div>
                                <div class="mb-5">
                                    <label for="password" class="block text-gray-600">Password</label>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} class="w-full p-2 border border-gray-300 rounded mt-1" />
                                </div>
                                <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}