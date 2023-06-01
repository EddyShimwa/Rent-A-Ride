import Dashboard from '../../Pages/Dashboard/Dashboard';
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import AllRides from '../../Pages/AllRides';
import Favorites from '../../Pages/Favorites';
import AddRide from '../../Pages/AddRide/AddRide';
import DeleteRide from '../../Pages/DeleteRide';
import NotFound from '../../Pages/NotFound/NotFound';
import Sidebar from '../../components/SideBar/Sidebar';
import DetailsPage from '../../Pages/Details/DetailsPage';


const ProjectRouter = () => {
  const Layout = () => {
      return (
        <div>
          <Sidebar />
          <Outlet />
        </div>
      )
  }

  const BrowserRoutes = () => {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/my-ride' element={<AllRides />} />
              <Route path='/favorite' element={<Favorites />} />
              <Route path='/add-ride' element={<AddRide />} />
              <Route path='/delete-ride' element={<DeleteRide />} />

            </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/ride-details' element={<DetailsPage />} />
          </Routes>
        </Router>
    )
  }

  return (
    <BrowserRoutes />
  )
}

export default ProjectRouter
