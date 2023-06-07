import Dashboard from '../../Pages/Dashboard/Dashboard';
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import AllRides from '../../Pages/AllRides';
import Favorites from '../../Pages/Favorite/Favorites';
import AddRide from '../../Pages/AddRide/AddRide';
import DeleteRide from '../../Pages/Delete/DeleteRide';
import NotFound from '../../Pages/NotFound/NotFound';
import Sidebar from '../../components/SideBar/Sidebar';
import DetailsPage from '../../Pages/Details/DetailsPage';

const ProtectedRoutes = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

const ProjectRouter = () => {
  const Layout = () => {
    return (
      <div>
        <Sidebar />
        <Outlet />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Protected Routes */}
          <Route
            path="/"
            element={<ProtectedRoutes />}
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-ride" element={<AllRides />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/add-ride" element={<AddRide />} />
            <Route path="/delete-ride" element={<DeleteRide />} />
            <Route path="/ride-details/:rideId" element={<DetailsPage />} />
          </Route>

          {/* Non-protected Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default ProjectRouter;
