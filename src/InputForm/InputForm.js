import React, { useState } from "react";
import DatePicker from "./DatePicker";
import "../styles/InputForm.css";
import "../styles/Buttons.css";
// import { Router, useNavigate } from "react-router-dom";

const InputForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [date, setDate] = useState(new Date());
  const [office, setOffice] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [callOffReason, setCallOffReason] = useState("");
  const [comments, setComments] = useState("");


  const handleOffice = (e) => {
    setOffice(e.target.value);
  };
  const handleCallOffReason = (e) => {
    setCallOffReason(e.target.value);
  };

  const submitCallOff = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/callOffs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        callOffDate: date.toISOString(),
        callOffReason: callOffReason,
        dateTimeSubmitted: Date.now(),
        office: office,
        employeeID: employeeId,
        comments: comments,
      }),
    })
      .then((response) => {
        console.log(response);
        handleSubmit();
        
      })
      .catch((e) => console.log(e));
  };
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   console.log("button is clicked")
  //   navigate('./confirmation/confirmation'); // Redirect to new page
  //   navigate('/',{replace: true}); 
  // }

  const handleSubmit = () => {
    props.setActiveTab("ConfirmationPage");
  };

  return (
    <div className="inputForm">
      <form onSubmit={submitCallOff}>
        <h1>ABSENCE MANAGEMENT FORM</h1>
        <label>Call Off Date:</label>
        <DatePicker
          selected={date}
          onChange={setDate}
          dateFormat="MM/dd/yyyy"
        />
        <label htmlFor="employeeID">Employee ID:</label>
        <input id="employeeID" name="employeeID"
          type="text"
          required
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="firstName"
          type="text"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" name="lastName"
          type="text"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="office">Office:</label>
        <select id="office" name="office" required value={office} onChange={handleOffice}>
          <option value="">-- Select --</option>
          <option value="0001 - Boston, MA">0001 - Boston, MA</option>
          <option value="016C - Dover, NH">016C - Dover, NH</option>
          <option value="0412 - South Bend, IN">0412 - South Bend, IN</option>
          <option value="0555 - Tampa, FL">0555 - Tampa, FL</option>
          <option value="0694 - Chandler, AZ">0694 - Chandler, AZ</option>
          <option value="0808 - New Castle, PA">0808 - New Castle, PA</option>
        </select>
        <label htmlFor="callOffReason">Call Off Reason:</label>
        <select id="callOffReason" name="callOffReason" required value={callOffReason} onChange={handleCallOffReason}>
          <option value="">-- Select --</option>
          <option value="ADA (Paid)">ADA (Paid)</option>
          <option value="ADA (Unpaid)">ADA (Unpaid)</option>
          <option value="Beach Day">Beach Day</option>
          <option value="Bereavement">Bereavement</option>
          <option value="FMLA (Paid)">FMLA (Paid)</option>
          <option value="FMLA (Unpaid)">FMLA (Unpaid)</option>
          <option value="Jury Duty">Jury Duty</option>
          <option value="Lost Time">Lost Time</option>
          <option value="STD">STD</option>
          <option value="Tardy">Tardy</option>
          <option value="UPTO">UPTO</option>
          <option value="Vacated - OT">Vacated - OT</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="comments">Comments:</label>
        <textarea id="comments" name="comments" onChange={(e) => setComments(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    );
};

export default InputForm;
