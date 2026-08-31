import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://img.magnific.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg' alt='logo' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujyZ8qRWALwj4E610x67QQMHXwuQWjeZiYiea1M0NROGYw-ixYKpE4Fg&s=10' alt='ava' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          my post
          <div>
            new post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
