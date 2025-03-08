import React, { useState } from "react";
import {  FaReceipt } from "react-icons/fa";

import "./style.css";

const DocumentList = () => {
  const [selectedTab, setSelectedTab] = useState("Bills");
  const [selectedBill, setSelectedBill] = useState(null);

  const bills = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    date: "Nov 1, 2019",
    amount: "£ 50.59",
    icon: <FaReceipt className="bill-icon" />
  }));

  return (
    <>  
    <div className="container">
      <div className="sidebar-invoice">
        <div className="tab-menu">
          <button 
            className={selectedTab === "All Document" ? "active-tab" : "inactive-tab"}
            onClick={() => setSelectedTab("All Document")}
          >
            All Document
          </button>
          <button 
            className={selectedTab === "Bills" ? "active-tab" : "inactive-tab"}
            onClick={() => setSelectedTab("Bills")}
          >
            Bills
          </button>
          <button 
            className={selectedTab === "Receipts" ? "active-tab" : "inactive-tab"}
            onClick={() => setSelectedTab("Receipts")}
          >
            Receipts
          </button>
        </div>
     
        <ul className="bill-list">
          {bills.map((bill) => (
            <div className="bill-recipt-container">
                <div>
                {bill.icon}
                </div>
                <div>
                <li 
              key={bill.id} 
              className={`bill-item ${selectedBill === bill.id ? "selected-bill" : ""}`}
              onClick={() => setSelectedBill(bill.id)}
            >
               
              <p className="bill-title">Bill {bill.id}</p>
              <p className="bill-date">Date: {bill.date}</p>
              <p className="bill-amount">{bill.amount}</p>
            </li>
                </div>
            </div>
          
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default DocumentList;