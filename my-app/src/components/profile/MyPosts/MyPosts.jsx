import stylles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div className={stylles.postBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>add post</button>
      </div>
    </div>
    <div className={stylles.posts}>
      <Post message='hi, how are you' likecount='15' />
      <Post message='it/s my first post' likecount='20' />
    </div>
  </div>
}

export default MyPosts;