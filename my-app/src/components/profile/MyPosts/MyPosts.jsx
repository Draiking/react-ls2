import stylles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

     let postsData = [
        { id: 1, message: 'hi, how are you', likecount: 15 },
        { id: 2, message: 'it/s my first post', likecount: 20 },
    ]

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