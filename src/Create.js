import React, { useState } from "react";
import DatePicker from "./DatePicker";
import './styles/styles.css';

const Create = () => {
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
        dateTimeSubmitted: Date.now(),
        office: office,
        employeeID: employeeId,
        comments: comments,
      }),
    })
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <>
    <div className="create">
      <form onSubmit={submitCallOff}>

        <h1>CALL OFF FORM</h1>
        <label>Call Off Date:</label>
    
        <DatePicker selected={date} onChange={setDate} dateFormat="MM/dd/yyyy" />
        <label>Employee ID:</label>
        <input
          type="text"
          required
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <label>First Name:</label>
        <input
          type="text"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Office:</label>
        <select required value={office} onChange={handleOffice}>
          <option value="">-- Select --</option>
          <option value="0001 - Boston, MA">0001 - Boston, MA</option>
          <option value="016C - Dover, NH">016C - Dover, NH</option>
          <option value="0412 - South Bend, IN">0412 - South Bend, IN</option>
          <option value="0555 - Tampa, FL">0555 - Tampa, FL</option>
          <option value="0694 - Chandler, AZ">0694 - Chandler, AZ</option>
          <option value="0808 - New Castle, PA">0808 - New Castle, PA</option>
        </select>
        <label>Call Off Reason:</label>
        <select required value={callOffReason} onChange={handleCallOffReason}>
          <option value="">-- Select --</option>
          <option value="ADA (Paid)">ADA (Paid)</option>
          <option value="ADA (Unpaid)">ADA (Unpaid)</option>
          <option value="Bereavement">Bereavement</option>
          <option value="FMLA (Paid)">FMLA (Paid)</option>
          <option value="FMLA (Unpaid)">FMLA (Unpaid)</option>
          <option value="Jury Duty">Jury Duty</option>
          <option value="Lost Time">Lost Time</option>
          <option value="MA PFMLA (Unpaid)">MA PFMLA (Unpaid)</option>
          <option value="State Sick Leave">State Sick Leave</option>
          <option value="STD">STD</option>
          <option value="Tardy">Tardy</option>
          <option value="UPTO">UPTO</option>
          <option value="Vacated - OT">Vacated - OT</option>
          <option value="Other">Other</option>
        </select>
        <label>Comments:</label>
        <textarea onChange={(e) => setComments(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
      </div>
          <table className="table table-striped">
            <thead>
              <tr>
              <th scope="col"></th>
                <th scope="col">Call Off Date</th>
                <th scope="col">Employee</th>
                <th scope="col">Reason</th>
                <th scope="col">IEX Updated</th>
                <th scope="col">Date Submitted</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* {filtercallOffsByLocation[0]
                ? filtercallOffsByLocation.map((callOffData) => ( */}
                    <tr key="">
                    <th scope="row" style={{textAlign:"center"}}><img
                      className="editIcon"
                      height="22px"
                      width="22px"
                      src="../assets/edit.png"
                      alt="Edit Record" /></th>
                      <td>08/24/2023</td>
                      <td>Thouvenin, Shannon</td>
                      <td>Lost Time</td>
                      <td>No</td>
                      <td>08/23/2023</td>
                      <td><img
                      className="deleteIcon"
                      height="22px"
                      width="22px"
                      src="../assets/delete.png"
                      alt="Delete Record" /></td>
                    </tr>
                    <tr>
                    <th scope="row" style={{textAlign:"center"}}><img
                      className="editIcon"
                      height="22px"
                      width="22px"
                      src="../assets/edit.png"
                      alt="Edit Record" /></th>
                      <td>08/23/2023</td>
                      <td>Roache, James</td>
                      <td>Jury Duty</td>
                      <td>No</td>
                      <td>08/23/2023</td>
                      <td><img
                      className="deleteIcon"
                      height="22px"
                      width="22px"
                      src="../assets/delete.png"
                      alt="Delete Record" /></td>
                    </tr> 
                    <tr>
                    <th scope="row" style={{textAlign:"center"}}><img
                      className="editIcon"
                      height="22px"
                      width="22px"
                      src="../assets/edit.png"
                      alt="Edit Record" /></th>
                      <td>08/22/2023</td>
                      <td>Allen, Stacy</td>
                      <td>FMLA</td>
                      <td>No</td>
                      <td>08/22/2023</td>
                      <td><img
                      className="deleteIcon"
                      height="22px"
                      width="22px"
                      src="../assets/delete.png"
                      alt="Delete Record" /></td>
                    </tr>         
                  {/* )) */}
                {/* : filtercallOffsByType.map((callOffData) => ( */}
                  {/* ))} */}
            </tbody>
          </table>
 
         </> 
  );
};

export default Create;
