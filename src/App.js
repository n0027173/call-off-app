import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import InputForm from "./InputForm/InputForm";
import AdminReport from "./AdminReport/AdminReport";
import AdminReportTest from "./AdminReport/AdminReportTest";
import Guidelines from "./Guidelines/Guidelines";
import Confirmation from "./Confirmation/Confirmation";
import Footer from "./Footer/Footer";
// import { Route } from "react-router-dom";

function App() {
const [activeTab, setActiveTab] = useState("Form");

function renderContent(activeTab) {
  switch (activeTab) {
    case "Form":
      return <InputForm setActiveTab={setActiveTab} />;
    case "AdminReportTest":
      return <AdminReportTest setActiveTab={setActiveTab} />;
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
    <Footer />
  </div>
);
}

export default App;
