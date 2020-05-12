import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {
  let resultPostsData = props.profilePage.posts.map((item) => {
    return <Post message={item.message} like={item.like} />
  })

  let onAddPost = () => {
    props.addPost();
  }

  let handleChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div>
        <textarea value={props.profilePage.newPostText} name="" onChange={handleChange} cols="25" rows="5"></textarea>
        <input type="button" onClick={onAddPost} value="New post" />
      </div>
      <div>
        {resultPostsData}
      </div>
    </div>)
}

export default MyPosts; 