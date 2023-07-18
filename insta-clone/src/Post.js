import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageUrl}) {
  return (
    <div className='post'>
      <div className='post_header'></div>
        <Avatar
        className="post_avatar"
        alt="Hahrui"
        src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
        {/*header ->  avatar + username*/}

        {/* image */}
        <img  className="post_image"src={imageUrl} alt=""></img>

        {/*username + caption */}
        <h4 className="post_text"><strong>haripriya</strong> WOW day</h4>
    </div>
    
  )
}

export default Post