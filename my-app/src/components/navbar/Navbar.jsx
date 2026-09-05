import { NavLink } from 'react-router-dom';
import stylles from './Navbar.module.css';


const NavBar = () => {
  return <nav className={stylles.nav}>
    <div className={stylles.item}>
      <NavLink 
      to='/profile' 
      className={({ isActive }) => isActive ? stylles.activeLink : ''
      }>Profile</NavLink>
    </div>
    <div className={`${stylles.item}`}>
      <NavLink 
      to='/messages' 
      className={({isActive}) => isActive ? stylles.activeLink : ''}
      >Messages</NavLink>
    </div>
    <div className={stylles.item}>
      <NavLink 
      to='/news'
      className={({isActive}) => isActive ? stylles.activeLink : ''}
      >News</NavLink>
    </div>
    <div className={stylles.item}>
      <NavLink 
      to='/music'
      className={({isActive}) => isActive ? stylles.activeLink : ''}
      >Music</NavLink>
    </div>
    <div className={stylles.item}>
      <NavLink 
      to='/settings'
      className={({isActive}) => isActive ? stylles.activeLink : ''}
      >Settings</NavLink>
    </div>
  </nav>
}

export default NavBar;