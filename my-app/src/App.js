import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/header/Header';
import NavBar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
    {/* <Profile /> */}
      <Dialogs />
      </div>
    </div>
  );
}

export default App;
