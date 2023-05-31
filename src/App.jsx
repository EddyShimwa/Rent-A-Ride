import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllRides from './Pages/AllRides';
import Favorites from './Pages/Favorites';
import AddRide from './Pages/AddRide';
import DeleteRide from './Pages/DeleteRide';
import NotFound from './Pages/NotFound/NotFound';

function App() {

  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/my-ride' element={<AllRides />} />
          <Route path='/favorite' element={<Favorites />} />
          <Route path='/add-ride' element={<AddRide />} />
          <Route path='/delete-ride' element={<DeleteRide />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
