import React, { useEffect, useState } from "react";

export function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out flex flex-col overflow-y-auto`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold mx-5">DormEase</h2>
          <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-md hover:bg-gray-700 md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-grow">
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" href="/">Home</a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" href="/profile">Profile</a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" href="/settings">Settings</a>
        </nav>
        <div className="mt-auto">
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" href="/logout">Logout</a>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 focus:outline-none">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold ml-2">My App</h1>
            </div>
            <div className="flex items-center">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">
                <img src="https://via.placeholder.com/40" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                <span className="mr-2">John Doe</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

