import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from "../firebase-config";

import '../App.css';

function Home({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, 'posts')
  
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  }


  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  

  return (
    <div className='homePage'>
       {postLists.map((post) => {
        return <div className='post'>
          <div className='postHeader'>
            <div className='title'><h1>{post.title}</h1></div>
          </div>  

          <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>

          <div className='postTextContainer'>
            {post.postText}
          </div>    

          <h3>By : {post.author.name}</h3>    
        </div>
       })}
    </div>
  )
}

export default Home