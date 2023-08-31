import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import "../styles/AdminReport.css";
import { resolvePath } from "react-router-dom";

const AdminReport = () => {
  const [callOffs, setCallOffs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchCallOffs = () => {
    console.log("Got HERE!!!")
    fetch("http://localhost:8080/api/callOffs")
      .then(response => response.json())
      .then(data => {
        const transformedData = data.map(item => ({
          ...item,
          id: item._id,
        }));
        setCallOffs(transformedData);
      })
      .catch(e => console.log(e));
  };

  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const toggleEdit = (id) => {
    if (editingId === id) {
      saveRow(id);
    }
    setEditingId(editingId === id ? null : id);
  };

  const saveRow = (id) => {
    const rowToSave = callOffs.find(row => row.id === id);
    if (rowToSave) {
      fetch(`http://localhost:8080/api/callOffs/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rowToSave),
      })
      .then(response => {
        console.log(response)
        if (response.ok) {
          fetchCallOffs(); // Refresh the data after a successful update
        } else {
          console.error("Failed to update record");
        }
      })
      .catch(e => console.error(e));
    }
  };

  useEffect(() => {
    fetchCallOffs();
  }, []);

  const columns = [
    {
      field: 'editAction',
      headerName: 'Edit',
      width: 100,
      renderCell: (params) => (
        <button onClick={() => toggleEdit(params.row.id)}>
          { editingId === params.row.id ? "Save" : "Edit" }
        </button>
      ),
    },
    {
      field: 'callOffDate',
      headerName: 'Call Off Date',
      width: 150,
      renderCell: (params) => formatDate(params.value),
      editable: (params) => params.row.id === editingId
    },
    { field: 'firstName', headerName: 'First name', width: 150, editable: (params) => params.row.id === editingId },
    { field: 'lastName', headerName: 'Last name', width: 150, editable: (params) => params.row.id === editingId },
    { field: 'callOffReason', headerName: 'Reason', width: 150, editable: (params) => params.row.id === editingId },
    { field: 'iexUpdated', headerName: 'IEX Updated', width: 150, editable: (params) => params.row.id === editingId },
    {
      field: 'dateTimeSubmitted',
      headerName: 'Date Submitted',
      width: 150,
      renderCell: (params) => formatDate(params.value),
      editable: (params) => params.row.id === editingId
    },
  ];

  return (
    <div className="AdminReport">
      <h2>ADMIN REPORT</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={callOffs} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default AdminReport;
