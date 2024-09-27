import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBell, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Navbar({ showSearchBar = false }) {
  const [notifications, setNotifications] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const pageNames = {
    "/zero-knowledge": "Zero-Knowledge Auto Discovery",
    "/payload-crafting": "Payload Crafting",
    "/contextual": "Contextual Analysis",
    "/cross-layered": "Cross Layer Testing Monitor",
    "/business-logic": "Business Logic Awareness",
    "/api-hub": "API Testing Hub",
    "/attack-simulation": "Attack Simulation Planner",
  };

  const currentPageName = pageNames[location.pathname] || "Dashboard";

  return (
    <nav style={{ backgroundColor: "#141622" }} className="p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white text-4xl font-bold">
          Fuzzer<span style={{ color: "#838AC1" }}>X</span>
        </Link>
        <div className="relative">
          <button
            style={{ backgroundColor: "#838AC1" }}
            onClick={toggleDropdown}
            className="text-white font-medium py-2 px-4 rounded flex items-center space-x-2 ml-6"
          >
            <span>{currentPageName}</span>
            {dropdownOpen ? <FaChevronUp className="text-white ml-2" /> : <FaChevronDown className="text-white ml-2" />}
          </button>

          {dropdownOpen && (
            <ul className="absolute top-12 left-0 text-gray-900 rounded-md shadow-lg w-56 py-2 z-50">
              {Object.keys(pageNames).map((key) => (
                <li key={key} style={{ background: "#515573" }} className="px-4 py-2 text-white cursor-pointer">
                  <Link to={key} onClick={toggleDropdown}>
                    {pageNames[key]}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {showSearchBar && (
        <input
          style={{ backgroundColor: "#141622" }}
          type="text"
          placeholder="Search..."
          className="border text-white border-white rounded-lg py-2 px-4 w-1/3"
        />
      )}

      <div className="flex items-center space-x-4">
        <div className="relative flex items-center justify-center bg-gray-700 rounded-full p-2">
          <FaBell className="text-yellow-500 text-xl cursor-pointer" />
          {notifications && <span className="absolute top-0 right-0 h-2 w-2 bg-green-600 rounded-full"></span>}
        </div>

        <div className="flex items-center m-2">
          <img
            src="https://avatars.githubusercontent.com/u/140960022?s=400&u=3ba3ead6ee484cf7edc8c5331bd03b063d049e33&v=4"
            alt="User"
            className="w-10 h-10 rounded-full object-cover "
          />
          <span style={{ background: "#8491ED" }} className="text-white font-medium rounded-lg ml-10 mr-2 px-6 py-2">
            Suraj Patel
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
