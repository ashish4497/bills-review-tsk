import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import "./style.css";

export default function PaymentDetails() {
  const [paymentStatus, setPaymentStatus] = useState("Paid");
  const [billNumber, setBillNumber] = useState("");
  const [billDate, setBillDate] = useState("");
  const [paidAmount, setPaidAmount] = useState("£ 1900.00");
  const [dueDate, setDueDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [currency, setCurrency] = useState("");
  const [descriptionType, setDescriptionType] = useState("Single");
  const [description, setDescription] = useState("");

  return (
    <>

    <div className="payment-container">
    <div class="payment-sub-container">
  <button class="nav-button left">
    &#x276E; 
  </button>
  <h2 class="payment-title">Payment Details</h2>
  <button class="nav-button right">
    &#x276F; 
  </button>
</div>

      <div className="form-group">
        <label>Payment Status</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Paid"
              checked={paymentStatus === "Paid"}
              onChange={() => setPaymentStatus("Paid")}
            />
            Paid
          </label>
          <label>
            <input
              type="radio"
              value="Unpaid"
              checked={paymentStatus === "Unpaid"}
              onChange={() => setPaymentStatus("Unpaid")}
            />
            Unpaid
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Bill Number</label>
        <input
          type="text"
          placeholder="Start Typing"
          value={billNumber}
          onChange={(e) => setBillNumber(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Bill Date</label>
        <input
          type="date"
          value={billDate}
          onChange={(e) => setBillDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Paid Amount</label>
        <input type="text" value={paidAmount} readOnly />
      </div>

      <div className="form-group date-group">
        <label>Paid Date</label>
        <input
          type="text"
          placeholder="Start Typing"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <FiCalendar className="calendar-icon" />
      </div>

      <div className="form-group">
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Payment Mode</label>
        <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
          <option value="">Select Payment Mode</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Cash">Cash</option>
        </select>
      </div>

      <div className="form-group">
        <label>Currency</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="">Select Currency</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>
      </div>

      <div className="form-group">
        <label>Bank Transaction Ref</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="form-group">
        <label>Total Amount</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="form-group">
        <label>Tax Amount</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="form-group">
        <label>Tax Amount (GBP)</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="form-group">
        <label>FX Rate</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="form-group">
        <label>Description Type</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Single"
              checked={descriptionType === "Single"}
              onChange={() => setDescriptionType("Single")}
            />
            Single
          </label>
          <label>
            <input
              type="radio"
              value="Multiple"
              checked={descriptionType === "Multiple"}
              onChange={() => setDescriptionType("Multiple")}
            />
            Multiple
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div class="payment-sub-container bottom-border">
  <button class="nav-button left">&#x276E;</button>
  <div class="stepper-dots">
    <span class="dot active"></span>
    <span class="dot"></span>
  </div>
  <button class="nav-button right">&#x276F;</button>
</div>


      <div className="action-buttons">
        <button className="save-btn">Save</button>
        <button className="publish-btn">Publish</button>
      </div>
    </div>
    </>
  );
}
