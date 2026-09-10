import stylles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

     let postsData = [
        { id: 1, message: 'hi, how are you', likecount: 15 },
        { id: 2, message: 'it/s my first post', likecount: 20 },
    ]


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
      <Post message={postsData[0].message} likecount={postsData[0].likecount} />
      <Post message={postsData[1].message} likecount={postsData[1].likecount} />
    </div>
  </div>
}

export default MyPosts;