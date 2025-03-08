import React from "react";
import "./style.css";

const InvoiceViewer = () => {
  return (
    <>
    <div className="invoice-container">
      <div className="invoice">
        <h2 className="invoice-title">INVOICE</h2>
        <div className="invoice-header">
          <div className="company-info">
            <h4>Bill to</h4>
            <p>
              Business Company 123<br />
              Grand Avenue, 2902<br />
              Country +00 000 000<br />
              000 CIF: 0000000ABC
            </p>
          </div>
          <div className="invoice-details">
            <p>
              <strong>Invoice</strong> #12345<br />
              <strong>Date</strong> 00/00/00
            </p>
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                <td>Service description</td>
                <td>00,00€</td>
                <td>1</td>
                <td>00,00€</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="payment-info">
         <div className="container-payment-method">
         <div className="payment-method">
            <strong>Payment method</strong>
            <p>By Bank: London State Bank 4X5 00</p>
            <p>123 456 678 91087</p>
          </div>
          <div className="terms">
          <h4>Terms & conditions</h4>
          <p>
            The origins of the first consultations date back to their beliefs,
            experiences, creation, or mythology. The recognition of consultations
            has evolved over time...
          </p>
        </div>
         </div>
          <div className="totals">
            <p>Subtotal: 00,00€</p>
            <p>Tax: 00,00€</p>
            <p><strong>Total: 00,00€</strong></p>
          </div>
        </div>

 

       
      </div>
      <div className="footer">
          <p>www.marblespa.com</p>
          <p>info@marblespa.com </p>
        </div>
    </div>

    </>
  );
};

export default InvoiceViewer;