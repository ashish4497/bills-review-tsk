// pages/Dashboard.jsx
import Sidebar from "../../components/SideBar";
import Topbar from "../../components/ToolBar";
import InvoiceViewer from "../../components/InvoiceViewer";
import PaymentDetails from "../../components/PaymentDetails";
import DocumentList from "../../components/DocumentList";
import './style.css'
import QuickbookCard from "../../components/QuickBookCard";
import { HeroSection } from "../HeroSection";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div >
          <HeroSection/>
          {/* <DocumentList />
          <InvoiceViewer /> */}
        </div>
      </div>
     <div>
     <QuickbookCard/>
     <PaymentDetails />
     </div>
    </div>
  );
};

export default Dashboard;
