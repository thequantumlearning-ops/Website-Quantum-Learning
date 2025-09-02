import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-indigo-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Quantum Learning</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/pricing" className="hover:text-gray-200">Pricing</Link>
          <Link to="/schedule" className="hover:text-gray-200">Schedule</Link>
          <Link to="/enterprise" className="hover:text-gray-200">Enterprise</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </nav>
      </div>
    </header>
  );
}

