import { postsData } from '../../..';
import stylles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {


  let postsElements = postsData
    .map(p => <Post message={p.message} likecount={p.likecount} />)


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
      {postsElements}
    </div>
  </div>
}

export default MyPosts;