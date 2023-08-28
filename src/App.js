import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import InputForm from "./InputForm/InputForm";
import AdminReport from "./AdminReport/AdminReport";
import Guidelines from "./Guidelines/Guidelines";

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
  </div>
);
}

export default App;
