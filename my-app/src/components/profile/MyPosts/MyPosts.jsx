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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
}

export default MyPosts;