import React, { useState } from "react";
import { FaHome, FaCog, FaUniversity, FaFileAlt, FaUser, FaClipboard, FaQuestionCircle } from "react-icons/fa";
import "./style.css";

export default function Sidebar() {
  const [active, setActive] = useState("Accounting");

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Accounting", icon: <FaCog /> },
    { name: "Banking", icon: <FaUniversity /> },
    { name: "Reports", icon: <FaFileAlt /> },
    { name: "Contacts", icon: <FaUser /> },
    { name: "Invoicing", icon: <FaClipboard /> },
    { name: "Queries", icon: <FaQuestionCircle /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo"> 
        <span>PE</span>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Help Section */}
      <div className="sidebar-help">
        <FaQuestionCircle />
        <span>Help</span>
      </div>
    </div>
  );
}
