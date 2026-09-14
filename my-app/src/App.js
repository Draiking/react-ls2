import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/header/Header';
import NavBar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Message from './components/Dialogs/Message/Message';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route index  path='/profile' element={<Profile postsData={props.appState.postsData}/>} />
            <Route path='/messages/*' element={<Dialogs dialogsData={props.appState.dialogsData} messagesData={props.appState.messagesData} />} />


            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
