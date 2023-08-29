import React, { useState, useEffect } from "react";
import '../styles/AdminReport.css';

const AdminReport = (props) => {
  const [callOffs, setCallOffs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/callOffs")
      .then(response => response.json())
      .then(data => setCallOffs(data))
      .catch(e => console.log(e));
  }, []);
  const handleDelete = () => {
    props.setActiveTab("");
    props.setActiveTab("AdminReport");

  }
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
          const updatedCallOffs = callOffs.filter((callOff) => callOff.id !== id);
          setCallOffs(updatedCallOffs);
          
        } else {
          console.error("Failed to delete record");
        }
      })
      .catch((e) => {
        console.error(e);
      });
      handleDelete();
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
            <th scope="col">IEX Updated</th>
            <th scope="col">Date Submitted</th>
            <th scope="col">Confirmation</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {callOffs.map(callOffData => (
            <tr key={callOffData.id}>
              <th scope="row" style={{ textAlign: "center" }}>
                <img
                  className="editIcon"
                  height="22px"
                  width="22px"
                  src="../assets/edit.png"
                  alt="Edit Record"
                />
              </th>
              <td>{formatDate(callOffData.callOffDate)}</td>
              <td>
                {callOffData.firstName} {callOffData.lastName}
              </td>
              <td>{callOffData.callOffReason}</td>
              <td>{callOffData.iexUpdated ? "Yes" : "No"}</td>
              <td>{formatDate(callOffData.dateTimeSubmitted)}</td>
              <td>{callOffData._id}</td>
              <td>
                <img onClick={() => deleteCallOff(callOffData._id)}
                  className="deleteIcon"
                  height="22px"
                  width="22px"
                  src="../assets/delete.png"
                  alt="Delete Record"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button type="submit">Submit</button> */}
    </div>
  );
};

export default AdminReport;