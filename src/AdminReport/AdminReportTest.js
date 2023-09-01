import React, { useState, useEffect } from "react";
import DatePicker from "../InputForm/DatePicker";
import UpdateButton from "../Buttons/UpdateButton";
import Modal from 'react-modal';
import '../styles/AdminReport.css';
import "../styles/InputForm.css";
import "../styles/UpdateForm.css";


const AdminReportTest = (props) => {
  const [callOffs, setCallOffs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Add a state variable to track the modal status
  const [selectedCallOff, setSelectedCallOff] = useState(null); // Add a state variable to store the selected call off data

  const fetchCallOffs = () => {
    fetch("http://localhost:8080/api/callOffs")
      .then((response) => response.json())
      .then((data) => setCallOffs(data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchCallOffs();
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/callOffs")
      .then((response) => response.json())
      .then((data) => setCallOffs(data))
      .catch((e) => console.log(e));
  }, []);

  // Format date to mm/dd/yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const deleteCallOff = (id) => {
    // Send a DELETE request to your server
    fetch(`http://localhost:8080/api/callOffs/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Update state to remove the deleted item
          setCallOffs(callOffs.filter((callOff) => callOff.id !== id));
          fetchCallOffs();
        } else {
          console.error("Failed to delete record");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // Define a function to open the modal and set the selected call off data
  const openModal = (callOffData) => {
    setModalIsOpen(true);
    setSelectedCallOff(callOffData);
  };

  // Define a function to close the modal and reset the selected call off data
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCallOff(null);
  };

  return (
    <div className="AdminReport">
      <h2>ADMIN REPORT</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Call Off Date</th>
            <th scope="col">Employee</th>
            <th scope="col">Reason</th>
            <th scope="col">WFM Updated</th>
            <th scope="col">Date Submitted</th>
            <th scope="col">Confirmation</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {callOffs.map((callOffData) => (
            <tr key={callOffData.id}>
              <th scope="row" style={{ textAlign: "center" }}>
                <img
                  alt="Edit Icon"
                  title="Edit Record"
                  className="editIcon"
                  height="22px"
                  width="22px"
                  src="../assets/edit.png"
                  onClick={() => openModal(callOffData)} // Add an onClick handler to open the modal
                />
              </th>
              <td>{formatDate(callOffData.callOffDate)}</td>
              <td>
                {callOffData.lastName}, {callOffData.firstName}
              </td>
              <td>{callOffData.callOffReason}</td>
              <td>{callOffData.iexUpdated ? "Yes" : "No"}</td>
              <td>{formatDate(callOffData.dateTimeSubmitted)}</td>
              <td>{callOffData._id}</td>
              <td>
                <img
                  alt="Delete Icon"
                  title="Delete Record"
                  onClick={() => deleteCallOff(callOffData._id)}
                  className="deleteIcon"
                  height="22px"
                  width="22px"
                  src="../assets/delete.png"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add a Modal component below the table */}
      <Modal
        isOpen={modalIsOpen} // Set the modal status based on the state variable
        onRequestClose={closeModal} // Set the function to close the modal when clicking outside or pressing ESC
        contentLabel="Edit Absence Management System" // Set the accessibility label for the modal
        ariaHideApp={false} // Disable the warning about hiding app elements
      >
        {/* Add some content inside the modal */}
        {selectedCallOff && ( // Check if the selected call off data is not null
          <div style={{backgroundColor: '#F5F5F5', height:'100%'
           }}>
            {/* <InputForm /> */}
            <div className="updateForm">
              <form>
                <h1>ABSENCE MANAGEMENT FORM</h1>
                <label>Call Off Date:</label>
                <DatePicker
                  // selected={date}
                  // onChange={setDate}
                  dateFormat="MM/dd/yyyy"
                  value= {formatDate(selectedCallOff.callOffDate)}
                />
                <label htmlFor="employeeID">Employee ID:</label>
                <input id="employeeID" name="employeeID"
                  type="text"
                  required
                  value={selectedCallOff.employeeID}
                />
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" name="firstName"
                  type="text"
                  required
                  value={selectedCallOff.firstName}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" name="lastName"
                  type="text"
                  required
                  value={selectedCallOff.lastName}
                />
                <label htmlFor="office">Office:</label>
                <select id="office" name="office" required value={selectedCallOff.office}>
                  <option value="">-- Select --</option>
                  <option value="0001 - Boston, MA">0001 - Boston, MA</option>
                  <option value="016C - Dover, NH">016C - Dover, NH</option>
                  <option value="0412 - South Bend, IN">0412 - South Bend, IN</option>
                  <option value="0555 - Tampa, FL">0555 - Tampa, FL</option>
                  <option value="0694 - Chandler, AZ">0694 - Chandler, AZ</option>
                  <option value="0808 - New Castle, PA">0808 - New Castle, PA</option>
                </select>
                <label htmlFor="callOffReason">Call Off Reason:</label>
                <select id="callOffReason" name="callOffReason" required value={selectedCallOff.callOffReason}>
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
                <textarea id="comments" name="comments">{selectedCallOff.comments}</textarea>
                <div className="buttonContainer">
                <UpdateButton /> 
                <button className="cancelButton" onClick={closeModal}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminReportTest;