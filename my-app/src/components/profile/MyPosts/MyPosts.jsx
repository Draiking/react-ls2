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
      <Post message='hi, how are you' likecount='15'/>
      <Post message='it/s my first post' likecount='20'/>
    </div>
  </div>
}

export default MyPosts;