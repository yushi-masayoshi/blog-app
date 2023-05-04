import React, { useContext, useEffect, useState } from "react";
import "./createPost.css";

import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../firebase"
import { useNavigate } from "react-router-dom";
import { AuthFlagContext } from "./providers/AuthFlagProvider";

export const CreatePost = () => {
  const [ title, setTitle ] = useState();
  const [ postText, setPostText ] = useState();
  const { isAuth } = useContext(AuthFlagContext);

  const navigate = useNavigate();

  const createPost = async() => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      auther: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })

    navigate("/");
  };

  useEffect(() => {
    if(!isAuth) {
      navigate("/login");
    }
  },[])

  return (
  <div className="createPostPage">
    <div className="postContainer">
      <h1>記事を投稿する</h1>
      <div className="inputPost">
        <div>タイトル</div>
        <input type="text" placeholder="タイトルを記入" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="inputPost">
        <div>投稿</div>
        <textarea type="text" placeholder="タイトルを記入" onChange={(e) => setPostText(e.target.value)}></textarea>
      </div>
      <button className="postButton" onClick={createPost}>投稿する</button>
    </div>
  </div>
  );
};