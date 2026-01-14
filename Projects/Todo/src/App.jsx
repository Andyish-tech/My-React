import { useState } from "react";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          To Do List
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            placeholder="Enter a task"
            className="flex-1 border rounded-lg px-3 py-2 "
          />
          <button
            className="bg-pink-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>
      { 
        <div>
          <ol>
          <li></li>
        </ol>
        </div>
      }
    </div>
  );
}
