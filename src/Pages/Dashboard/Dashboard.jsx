import Sidebar from "../../components/SideBar/Sidebar";
import AllRides from "../../Pages/AllRides";

const Dashboard = () => {
    return (
      <div className="dashboard-container">
        <div>
          <Sidebar />
          <AllRides />
        </div>
    </div>
  );
};

export default Dashboard;
