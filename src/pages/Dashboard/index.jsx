import Sidebar from "../../components/SideBar";
import Topbar from "../../components/ToolBar";
import PaymentDetails from "../../components/PaymentDetails";
import './style.css'
import QuickbookCard from "../../components/QuickBookCard";
import  HeroSection  from "../HeroSection";

const Dashboard = () => {
  return (
    <div>   
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div >
          <HeroSection/>
        </div>
      </div>
     <div>
     <QuickbookCard/>
     <PaymentDetails />
     </div>
    </div>
    </div>
  );
};

export default Dashboard;
