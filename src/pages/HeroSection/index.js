import React, { useState } from "react";
import DocumentList from "../../components/DocumentList";
import InvoiceViewer from "../../components/InvoiceViewer";
import "./style.css";
import EasyUpload from "../../components/AddRecipt";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <EasyUpload onClose={onClose} />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="content">
      <div style={{ textAlign: "end" }}>
        <button className="expense-btn" onClick={() => setIsModalOpen(true)}>
          Add to Expenses Report
        </button>
        <div style={{ display: "flex" }}>
          <DocumentList />
          <InvoiceViewer />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HeroSection;
