import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Implement the logic to handle the upload process.
    // Send the selected file and caption to the server.
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a caption"
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
