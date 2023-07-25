import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import './ImageUpload.css';
import { db, storage } from "./firebase";

function ImageUpload({username}) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress fun...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          //error fun..
          console.log(error);
          alert(error.message);
        },
        () => {
          //complete fun....
          storage
          .ref("images")
          .child("image.name")
          .getDownloadURL()
          .then(url =>{
            //post img inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
              caption: caption,
              imageUrl : url,
              username : username
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
        }
      );
  };

  return (
    <div className="imageupload">
      <progress value={progress} max="100"/>
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>
        <FaUpload /> Upload
      </button>
    </div>
  );
}

export default ImageUpload;
