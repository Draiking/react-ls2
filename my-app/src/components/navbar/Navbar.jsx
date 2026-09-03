import stylles from './Navbar.module.css';


const NavBar = () => {
  return <nav className={stylles.nav}>
    <div className={stylles.item}>
      <a>Profile</a>
    </div>
    <div className={`${stylles.item} ${stylles.active}`}>
      <a>Messages</a>
    </div>
    <div className={stylles.item}>
      <a>News</a>
    </div>
    <div className={stylles.item}>
      <a>Music</a>
    </div>
    <div className={stylles.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default NavBar;