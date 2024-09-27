import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBell } from "react-icons/fa";

function Navbar() {
  const [notifications, setNotifications] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const pageNames = {
    "/zero-knowledge": "Zero-Knowledge Auto Discovery",
    "/payload-crafting": "Payload Crafting Section",
    "/contextual": "Contextual Analysis",
    "/cross-layered": "Cross Layer Testing Monitor",
    "/business-logic": "Business Logic Awareness",
    "/api-hub": "API Testing Hub",
    "/pagattack-simulation": "Attack Simulation Planner",
  };

  const currentPageName = pageNames[location.pathname] || "Dashboard";

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white text-4xl font-bold">
          Fuzzer<span style={{ color: "#838AC1" }}>X</span>
        </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-white font-medium bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded">
            {currentPageName}
          </button>

          {dropdownOpen && (
            <ul className="absolute top-12 left-0 bg-white text-gray-900 rounded-md shadow-lg w-56 py-2 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/zero-knowledge" onClick={toggleDropdown}>
                  Zero-Knowledge Auto Discovery
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/payload-crafting" onClick={toggleDropdown}>
                  Payload Crafting Section
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/contextual" onClick={toggleDropdown}>
                  Contextual Analysis
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/cross-layered" onClick={toggleDropdown}>
                  Cross Layer Testing Monitor
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/business-logic" onClick={toggleDropdown}>
                  Business Logic Awareness
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/api-hub" onClick={toggleDropdown}>
                  API Testing Hub
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/pagattack-simulation" onClick={toggleDropdown}>
                  Attack Simulation Planner
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaBell className="text-white text-xl cursor-pointer" />
          {notifications && <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full"></span>}
        </div>

        <div className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full object-cover mr-2" />
          <span className="text-white font-medium">Suraj Patel</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
