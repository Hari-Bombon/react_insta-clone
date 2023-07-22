import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import { auth, db } from './firebase';

function getModalStyle() {
  const top = 50;
  const left = 50 ;

  return{
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}% -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow:theme.shadows[5],
    padding: theme.spacing(2,4,3),
  }
}));

const signUp = (event) => {

}

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const[post, setPosts] =useState ([]);
  const [openSignIn , setOpenSignIn] = useState('');
  const [open, setOpen] = useState(false);
  const [username , setUsername] =useState('');
  const [password, setPassword] =useState ('');
  const [email , setEmail] =useState('');
  const [user , setUser] = useState(null);
  
  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in..
        console.log(authUser);
        setUser(authUser);
      }else{
        //user has logged out..
        setUser(null);
      }
    })
    return() => {
      //perform some cleanup actions
      unsubscribe();
    }
    
  },[user , username]);


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
const signUp = (event) => {
  event.preventDefault();
  
  
  auth
  .createUserWithEmailAndPassword(email , password)
  .then((authUser) =>{
    return authUser.user.updateProfile({
      displayName: username
    })
  })
  .catch((error) => alert(error.message));
  setOpen(false);
}
const signIn = (event) => {
  event.preventDefault();

  auth.signInEmailAndPassword(email, password)
  .catch((error) => alert(error.message))
  
  setOpenSignIn(false);
}

  return (
    <div className="App">
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup"> 
          <center>
          <img
            className="app_headerImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt=""
        />
          </center>
        {user ? (
        <Button onClick={() => auth.signOut}>Logout</Button>
        ): (
          <div className="app_loginContainer">
        <Button onClick={() => setOpen(true)}>Sign In</Button>
        <Button onClick={() => setOpen(true)}>SignUp</Button>
        </div>
        )}
        
        <Input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
          />
        <Input
        placeholder="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signUp}>Sign Up</Button>

          </form>
          
    
    </div>
  </Modal>

    <Button type="submit" onClick={() => setOpen(true)}> Sign Up</Button>
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
