import stylles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujyZ8qRWALwj4E610x67QQMHXwuQWjeZiYiea1M0NROGYw-ixYKpE4Fg&s=10' alt='ava' />
      </div>
      <div className={stylles.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;