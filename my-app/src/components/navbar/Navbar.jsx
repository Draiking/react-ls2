import { NavLink } from 'react-router-dom';
import stylles from './Navbar.module.css';


const NavBar = () => {
  return <nav className={stylles.nav}>
    <div className={stylles.item}>
      <NavLink to='/profile'>Profile</NavLink>
    </div>
    <div className={`${stylles.item} ${stylles.active}`}>
      <NavLink to='/messages'>Messages</NavLink>
    </div>
    <div className={stylles.item}>
      <NavLink to='/news'>News</NavLink>
    </div>
    <div className={stylles.item}>
      <NavLink to='/music'>Music</NavLink>
    </div>
    <div className={stylles.item}>
      <NavLink to='/settings'>Settings</NavLink>
    </div>
  </nav>
}

export default NavBar;