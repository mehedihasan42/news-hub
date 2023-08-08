import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useAllUsers from '../../hooks/useAllUsers';
import useSaveNews from '../../hooks/useSaveNews';

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
  }

  const [isAdmin,adminLoader] = useAdmin()

  const navLinks = <>

    {
      isAdmin?.admin ? <>
        <li><NavLink to={`category/0`}>Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/allUsers">All Users</NavLink></li>
        <li><NavLink to="/uploadNews">Upload News</NavLink></li>
      </> : <>
        <li><NavLink to={`category/0`}>Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/saveNews">Save News</NavLink></li>
      </>
    }
  </>

  return (
    <div className="navbar bg-base-100 w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {
          user ? <>
            <p>Hi,{user.displayName}</p>
            {console.log(user.displayName)}
            <Link onClick={handleLogOut} className="btn btn-neutral ml-2">Log Out</Link>
          </> :
            <Link to='/login' className="btn btn-neutral">Log In</Link>
        }

      </div>
    </div>
  );
};

export default NavBar;