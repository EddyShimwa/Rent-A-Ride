import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';

function App() {

  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
