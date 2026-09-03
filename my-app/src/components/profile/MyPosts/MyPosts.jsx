import stylles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>add post</button>
    </div>
    <div className={stylles.posts}>
      <Post message='hi, how are you'/>
      <Post message='it/s my first post'/>
    </div>
  </div>
}

export default MyPosts;