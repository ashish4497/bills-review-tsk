import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiUploadCloud } from "react-icons/fi";
import "./style.css";

export default function EasyUpload() {
  const [selectedTab, setSelectedTab] = useState("Receipts");
  const [selectedClient, setSelectedClient] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const emails = {
    Single: "abc.single@gmail.com",
    Multiple: "abc.multiple@gmail.com",
  };

  // Handle file upload
  const handleFileChange = (event) => {
    if (event.target.files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(event.target.files)]);
    }
  };

  // Handle email copy
  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    alert(`Copied: ${email}`);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h2>EasyUpload</h2>
        {/* Tabs */}
        <div className="tabs">
          {["Bills", "Receipts", "Bank"].map((tab) => (
            <button
              key={tab}
              className={selectedTab === tab ? "tab active" : "tab"}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="close-button">
          <IoClose size={20} />
        </button>
      </div>

      {/* Document Owner & Client */}
      <div className="info-section">
        <div className="half-width">
          <span className="label">Document Owner</span>
          <p className="bold-text">Accountant 01</p>
        </div>
        <div className="half-width">
          <span className="label">Client</span>
          <select
            className="dropdown"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <option value="">Select Client</option>
            <option value="Client 1">Client 1</option>
            <option value="Client 2">Client 2</option>
          </select>
        </div>
      </div>

      {/* File Upload Section */}
      {/* <div
        className="file-upload"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="upload-content">
          <span className="icon">☁️</span>
          <p>Drag & Drop or Choose file to upload</p>
          <small className="hint">JPG, PNG, PDF, CSV</small>
          <input
            type="file"
            multiple
            className="file-input"
            onChange={handleFileChange}
          />
        </div>
      </div> */}
      {/* File Upload Section */}
      <div className="file-upload">
        <label htmlFor="fileInput" className="upload-content">
          <FiUploadCloud size={40} className="upload-icon" />
          <p>Drag & Drop or Choose file to upload</p>
          <small className="hint">JPG, PNG, PDF, CSV</small>
          <input
            id="fileInput"
            type="file"
            multiple
            onChange={handleFileChange}
            className="file-input"
          />
        </label>
      </div>

      {/* Uploaded Files List */}
      {/* {uploadedFiles.length > 0 && (
        <div className="uploaded-files">
          <h4>Uploaded Files:</h4>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )} */}

      {/* Add Receipt Button */}
      <button className="add-button">Add Receipt</button>

      {/* Email Section */}
      <div className="email-section">
        <p>Send Over Email</p>
        {Object.entries(emails).map(([label, email]) => (
          <div className="email-item" key={label}>
            <p>
              {label}: <span className="email">{email}</span>
            </p>
            <button
              className="copy-button"
              onClick={() => handleCopyEmail(email)}
            >
              <FaRegCopy />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
