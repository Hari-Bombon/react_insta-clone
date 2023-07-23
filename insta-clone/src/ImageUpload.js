import React, { useState } from "react";

function ImageUpload() {
    const[caption, setCaption] = useState('null');
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange= (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    return{
        <div>

        {/* i want to have..*/}
         {/* caption input*/}
          {/* file picker*/}
           {/*post button */}
                <input type="text" placeholder='Enter a caption' 
            onChange={event =>setCaption(event.target.value)}value={}/>
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
            Upload
           </Button>
    </div>
    }
}

export default ImageUpload