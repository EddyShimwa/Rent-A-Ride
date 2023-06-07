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
import { useNavigate } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navLinkClass = 'nav-link';
  const navLinkIconClass = 'nav-link-icon';
  const navigate = useNavigate();

  const removeToken = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      await navigate('/login');
    } else {
      await navigate('/');
    }
    setLoading(false);
  };

  return (
      <main className={`${show && 'space-toggle'}`}>
      <header className={`header ${show && 'space-toggle'}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          {show ? <CgClose className={navLinkIconClass} /> : <SlMenu className={navLinkIconClass} />}
        </div>
        <p className='app-name'>Rent-A-Ride</p>
        <div className='header-search'>
          <BsSearch className='search-icon' />
        </div>
      </header>

      <aside className={`sidebar ${show && 'show'}`}>
        <nav className='nav'>
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

          {
            loading && <Dialog message="Loading..." isLoading={true} />
          }

          <button onClick={removeToken} className={`${navLinkClass}`}>
            <RiLogoutCircleRLine className={navLinkIconClass}/>
            <span className='nav-link-name'>Logout</span>
          </button>
        </nav>
      </aside>
      </main>
  );
}

export default Sidebar;

