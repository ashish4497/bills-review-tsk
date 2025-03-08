
import { useState } from "react";
import { FaSearch, FaBell, FaCog, FaUser } from "react-icons/fa";
import "./style.css";
export default function Toolbar() {
  const [reviewSource, setReviewSource] = useState("Google");

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <label className="review-label">Review</label>
        <select
          className="review-dropdown"
          value={reviewSource}
          onChange={(e) => setReviewSource(e.target.value)}
        >
          <option>Google</option>
          <option>Yelp</option>
          <option>Facebook</option>
        </select>
        <button className="quickbooks-button">Quickbook’s Data</button>
      </div>


      <div className="toolbar-right">
        <button className="icon-button">
          <FaSearch />
        </button>
        <button className="action-button">Export to Excel</button>
        <button className="action-button">Add Document</button>

  
        <div className="dropdown">
          <button className="action-button">Connect ▼</button>
          <div className="dropdown-content">
            <a href="#">Google Drive</a>
            <a href="#">OneDrive</a>
          </div>
        </div>

        <button className="icon-button">
          <FaBell />
        </button>
        <button className="icon-button">
          <FaCog />
        </button>
        <button className="icon-button">
          <FaUser />
        </button>
      </div>
    </div>
  );
}

