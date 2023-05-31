import { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { SlMenu } from 'react-icons/sl'
import { BiImageAdd } from 'react-icons/bi'
import { AiFillCar } from 'react-icons/ai'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          {show ? <CgClose className='header-toggle-icon' /> : <SlMenu className='header-toggle-icon' />}
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          {/* if show is true hide the profile logo */}
          {
            !show ? <div className='profile'></div> : <div className='profile-logo'></div>
          }
          {/* <div className='profile-logo'></div> */}
          <div className='sidebar-items-container'>
            <Link to='/my-ride' className='nav-logo active'>
              <AiFillCar className='nav-link-icon' />
              <span className='nav-logo-name'>My Rides</span>
            </Link>

            <div className='nav-list'>
              <Link to='/favorite' className='nav-link'>
                <FaHeart className='nav-link-icon' />
                <span className='nav-link-name'>My Favorite</span>
              </Link>
              <Link to='/add-ride' className='nav-link'>
                <BiImageAdd className='nav-link-icon' />
                <span className='nav-link-name'>Add Ride</span>
              </Link>
              <Link to='/delete-ride' className='nav-link'>
                <AiFillDelete className='nav-link-icon' />
                <span className='nav-link-name'>Delete Ride</span>
              </Link>
            </div>
          </div>

          <Link to='/login' className='nav-link'>
            <RiLogoutCircleRLine className='nav-link-icon' />
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

      <h1>Content</h1>
    </main>
  );
}

export default Sidebar
