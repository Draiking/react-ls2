import stylles from './Navbar.module.css';


const NavBar = () => {
  return <nav className={stylles.nav}>
    <div className={stylles.item}>
      <a href='/profile'>Profile</a>
    </div>
    <div className={`${stylles.item} ${stylles.active}`}>
      <a href='/messages'>Messages</a>
    </div>
    <div className={stylles.item}>
      <a href='/news'>News</a>
    </div>
    <div className={stylles.item}>
      <a href='/music'>Music</a>
    </div>
    <div className={stylles.item}>
      <a href='/setting'>Settings</a>
    </div>
  </nav>
}

export default NavBar;