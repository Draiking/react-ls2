import stylles from './Profile.module.css';

const Profile = () => {
  return <div className={stylles.content}>
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
}

export default Profile;