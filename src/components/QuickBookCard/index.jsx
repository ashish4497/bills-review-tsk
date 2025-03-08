import React, { useState } from "react";
import "./style.css";

const QuickbookCard = () => {
  const [autoSync, setAutoSync] = useState(true);
  const [saveConfig, setSaveConfig] = useState(true);
  const [comment, setComment] = useState("");
  const [activeTab, setActiveTab] = useState("comment");

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-header-left">
          <img
            src={'./logo.png'}
            alt="Quickbook Logo"
            className="logo"
          />
          <div>
            <h2 className="title">Quickbook</h2>
            <p className="timestamp">16 June, 2024 - 8:15 PM</p>
          </div>
        </div>
        <div className="card-header-right">
          <p className="status">Publishing...</p>
          <p className="author">Jimmy Jason</p>
        </div>
      </div>

      <div className="options-section">
        <label className="option">
          <input
            type="checkbox"
            checked={autoSync}
            onChange={() => setAutoSync(!autoSync)}
          />
          <span>Auto-sync</span>
        </label>
        <label className="option">
          <input
            type="checkbox"
            checked={saveConfig}
            onChange={() => setSaveConfig(!saveConfig)}
          />
          <span>Save Config</span>
        </label>
      </div>

      <div className="comment-section">
        <div className="comment-tabs">
          <button
            className={activeTab === "comment" ? "active-tab" : "inactive-tab"}
            onClick={() => setActiveTab("comment")}
          >
            Comment
          </button>
          <button
            className={activeTab === "query" ? "active-tab" : "inactive-tab"}
            onClick={() => setActiveTab("query")}
          >
            Query
          </button>
        </div>
        <div className="comment-input">
          <p className="comment-label">Type Comment</p>
          <input
            type="text"
            placeholder="Start typing..."
            className="input-field"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          className="add-comment-button"
          onClick={() => alert(`Comment Added: ${comment}`)}
        >
          Add Comment
        </button>
      </div>

      <button className="view-line-items-button">View Line Items</button>
    </div>
  );
};

export default QuickbookCard;