import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const[post, setPosts] =useState ([]);
  // useEffect ->runs a piece of code based on specific condition
  useEffect (() => {
    //this is where the code runs
db.collection('posts').onSnapshot (snapshot=>{
// every time a new post is added , this code fires

setPosts(snapshot.docs.map(doc => ({
  id: doc.id,
  posts:doc.data()


})));
})
  },[]);
  return (
    <div className="App">
    <div className="app_header">
      <img
        className="app_headerImage"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        alt=""
        />
    </div>
    <h1>hi</h1>
    {
      post.map (({id, post}) =>(
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
      ))
    }

    <Post username="Hy" caption="minions" imageUrl="https://tse1.mm.bing.net/th?id=OIP.3yqBVngk9xy4ZcEh5Zq3RQHaGW&pid=Api&P=0&h=180"/>
    <Post username="remo" caption="siavas" imageUrl="https://tse1.mm.bing.net/th?id=OIP.NfcnKBmZD3OrLNSYdSKbUgHaJ4&pid=Api&P=0&h=180"/>
    <Post username="cheez" caption="kakasuki" imageUrl="https://tse3.mm.bing.net/th?id=OIP.LlDtcenlPDhLGzkCyE03xAHaIo&pid=Api&P=0&h=180"/>
  
  
    
    {/*posts */}
     {/*posts */}
    </div>
  );
}

export default App;
