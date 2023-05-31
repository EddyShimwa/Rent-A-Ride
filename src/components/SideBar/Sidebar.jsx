import { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
// import SidebarData from './SidebarData'
import { IconContext } from 'react-icons'
import { AiFillHome } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const SidebarData = [
    {
      title: "My Ride",
      path: "/my-ride",
      icon: AiFillHome,
      cName: "nav-text"
    },

    {
      title: "My Favorite",
      path: "/favorite",
      icon: FaHeart,
      cName: "nav-text"
    },

    {
      title: "Add Ride",
      path: "/add-ride",
      icon: AiFillFileAdd,
      cName: "nav-text"
    },

    {
      title: "Delete Ride",
      path: "/delete-ride",
      icon: AiFillDelete,
      cName: "nav-text"
    }

  ];

  return (
    <div>
      <IconContext.Provider value={{ color: '#333' }}>
        <div className='navbar'>
          <Link to='/' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='/' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  )
}

export default Sidebar
