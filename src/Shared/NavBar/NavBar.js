import React, { useState } from 'react';
import './navbar.css'
import logo from '../../images/Logo/logo.png'
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const NavBar = () => {
  const [showMenu, setShowMenu] = useState();

  const [user] = useAuthState(auth);

  return (
    <nav>
      <div className="nav-container" >

        <div className="nav-brand">
          <img src={logo} alt="" />
        </div>

        <div className="nav-items">
          <ul className={showMenu ? '' : 'header-container'}>
            <li className='liItem'>
              <NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/">Home</NavLink>
            </li>
            <li className='liItem '>
              <NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/blogs">Blogs</NavLink>
            </li>
            <li className='liItem'>
              <NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/aboutMe">About Me</NavLink>
            </li>

            {
              user ?
                <>
                  <li className='liItem'><NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/addProduct">AddProduct</NavLink></li>

                  <li className='liItem'><NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/manageProduct">ManageProduct</NavLink></li>
                </>
                : <></>
            }

            {
              user ? <li className='liItem'>
                <button className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} onClick={() => { signOut(auth) }}>SignOut</button>
              </li> :
                <li className='liItem'>
                  <NavLink className={({ isActive }) => isActive ? "active-nav" : 'nav-item'} to="/login">Login</NavLink>
                </li>
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;