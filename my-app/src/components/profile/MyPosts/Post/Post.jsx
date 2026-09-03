import stylles from './Post.module.css';

const MyPosts = () => {
  return (
    <div className={stylles.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGASmCbRDtvwEfvIZ8O2XOj0K9fl51KgNMGVJbQLd7w&s=10' alt='avatar'></img>
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default MyPosts;