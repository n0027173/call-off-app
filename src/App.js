import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import InputForm from "./InputForm/InputForm";
import AdminReport from "./AdminReport/AdminReport";
import Guidelines from "./Guidelines/Guidelines";
import Confirmation from "./Confirmation/Confirmation";
// import { Route } from "react-router-dom";

function App() {
const [activeTab, setActiveTab] = useState("Form");

function renderContent(activeTab) {
  switch (activeTab) {
    case "Form":
      return <InputForm setActiveTab={setActiveTab} />;
    case "AdminReport":
      return <AdminReport setActiveTab={setActiveTab} />;
    case "Guidelines":
      return <Guidelines setActiveTab={setActiveTab} />;
    case "ConfirmationPage":
      return <Confirmation setActiveTab={setActiveTab} />;
    default:
      return <InputForm setActiveTab={setActiveTab} />;
  }
}

return (
  <div>
    <header>
      <Navbar setActiveTab={setActiveTab} />
    </header>
    {renderContent(activeTab)}
    {/* <Route path="../confirmation/confirmation" element={<Confirmation />} /> */}
  </div>
);
}

export default App;
