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
import { BsSearch } from 'react-icons/bs';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const navLinkClass = 'nav-link';
  const navLinkIconClass = 'nav-link-icon';

  return (
      <main className={`${show && 'space-toggle'}`}>
      <header className={`header ${show && 'space-toggle'}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          {show ? <CgClose className={navLinkIconClass} /> : <SlMenu className={navLinkIconClass} />}
        </div>
        <p>Rent-A-Ride</p>
        <div className='header-search'>
          <BsSearch className='search-icon' />
        </div>
      </header>

      <aside className={`sidebar ${show && 'show'}`}>
        <nav className='nav'>
          {/* {!show ? <div className='profile-logo'></div> : <div className='profile'></div>} */}
          <div className='sidebar-items-container'>
            <div className='nav-list'>
              <Link to='/my-ride' className={`nav-logo ${navLinkClass} active`}>
                <AiFillCar className={navLinkIconClass} />
                <span className='nav-logo-name'>My Rides</span>
              </Link>

              <Link to='/favorite' className={`${navLinkClass}`}>
                <FaHeart className={navLinkIconClass} />
                <span className='nav-link-name'>My Favorite</span>
              </Link>
              <Link to='/add-ride' className={`${navLinkClass}`}>
                <BiImageAdd className={navLinkIconClass} />
                <span className='nav-link-name'>Add Ride</span>
              </Link>
              <Link to='/delete-ride' className={`${navLinkClass}`}>
                <AiFillDelete className={navLinkIconClass} />
                <span className='nav-link-name'>Delete Ride</span>
              </Link>
            </div>
          </div>

          <Link to='/login' className={`${navLinkClass}`}>
            <RiLogoutCircleRLine className={navLinkIconClass} />
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
      </main>
  );
}

export default Sidebar;

