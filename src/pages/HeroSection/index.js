import React from "react";
import DocumentList from "../../components/DocumentList";
import InvoiceViewer from "../../components/InvoiceViewer";

export const HeroSection = () => {
  return (
    <div className="content">
      <div style={{ textAlign: "end" }}>
        <button className="expense-btn">Add to Expenses Report</button>
        <div style={{ display: "flex" }}>
          <DocumentList />
          <InvoiceViewer />
        </div>
      </div>
    </div>
  );
};
