import stylles from './MyPosts.module.css';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>add post</button>
    </div>
    <div className={stylles.posts}>
      <div className={stylles.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGASmCbRDtvwEfvIZ8O2XOj0K9fl51KgNMGVJbQLd7w&s=10' alt='avatar'></img>
        post 1
      </div>
      <div className={stylles.item}>
        post 2
      </div>
    </div>
  </div>
}

export default MyPosts;