import axios from "axios";
import React, { useState, useEffect } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';
import { Layout } from "../Layout/layout.jsx";

// Dummy data
const dining_menu = {
    date: "2024-06-23",
    lunch: "Rice, Fish Curry, Daal",
    dinner: "Rice, Chicken Curry, Daal",
    special: true
};

const mess_manager = [
    {
        stu_id: 1905024,
        student: {
            name: "Rakib Ahsan",
            photo: "https://via.placeholder.com/40",
            stu_id: 1905024
        }
    },
    {
        stu_id: 1905048,
        student: {
            name: "Al Amin Sany",
            photo: "https://via.placeholder.com/40",
            stu_id: 1905048
        }
    }
];

const isManager = true; // Change this value to false to hide the form

export function DiningMenu() {
    const [date, setDate] = useState(new Date(dining_menu.date));
    const [menu, setMenu] = useState(dining_menu);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handlePrevDay = () => setDate(subDays(date, 1));
    const handleNextDay = () => setDate(addDays(date, 1));

    useEffect(() => {
        // Fetch data from backend here and update state
    }, [date]);

    return (
        <Layout>
            <div className="max-w-5xl mx-auto p-4">
                {/* Date Navigation */}
                <div className="flex items-center justify-center mb-10">
                    <button onClick={handlePrevDay} className="px-2 text-xl font-bold ">←</button>
                    <p className="mx-2 text-3xl font-semibold">{format(date, 'yyyy-MM-dd')}</p>
                    <button onClick={handleNextDay} className="px-2 text-xl font-bold ">→</button>
                </div>

                {/* Menu Items and Calendar */}
                <div className="flex justify-between">
                    <div className="flex-grow-1 ml-8">
                        <div className="flex">
                            <div>
                                {dining_menu.special && (
                                    <div className="mb-2">
                                        <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">Special</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-3xl font-semibold mb-2">Lunch</h2>
                            <p className="text-xl">{menu.lunch}</p>
                        </div>
                        <div className="mt-8 mb-4">
                            <h2 className="text-3xl font-semibold mb-2">Dinner</h2>
                            <p className="text-xl">{menu.dinner}</p>
                        </div>
                    </div>
                    <div className="flex-grow-2">
                        <Calendar value={selectedDate} onChange={setSelectedDate} className="mb-4 rounded-md p-2" />
                        <div className="border p-4 rounded">
                            <h2 className="font-bold mb-2">Mess Managers</h2>
                            {mess_manager.map(manager => (
                                <div key={manager.stu_id} className="flex items-center mb-2">
                                    <img src={manager.student.photo} alt={manager.student.name} className="w-10 h-10 rounded-full mr-2" />
                                    <div>
                                        <p className="font-bold"> {manager.student.stu_id} - {manager.student.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form for Mess Manager */}
                {isManager && (
                    <div>
                        <div>
                            <h2 className="text-4xl font-bold mb-4 border-b-2 p-4">Update Menu</h2>
                        </div>

                        <div className="border p-4 rounded mt-4 max-w-2xl mx-auto">
                            <form>
                                <div className="mb-4">
                                    <label className="block mb-1">Lunch</label>
                                    <input type="text" defaultValue={menu.lunch} className="border p-2 w-full" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Dinner</label>
                                    <input type="text" defaultValue={menu.dinner} className="border p-2 w-full" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Date</label>
                                    <input type="date" defaultValue={format(date, 'yyyy-MM-dd')} className="border p-2 w-full" />
                                </div>
                                <div className="mb-4">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" defaultChecked={menu.special} className="mr-2" />
                                        Special
                                    </label>
                                </div>
                                <button type="submit" className="basic-btn w-full">Submit</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};