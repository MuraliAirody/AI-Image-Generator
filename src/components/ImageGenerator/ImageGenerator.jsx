import './ImageGenerator.css'
import default_image from "../Assets/default.jpg"
import { useState } from 'react'
import { useRef } from 'react';
const ImageGenerator = () => {
    const [image_url,setImage_url]=useState("/");
    let inputRef = useRef(null);

    const ImageGenerator = async () => {
        if (inputRef.current.value === "") {
            return;
        }
        const response = await fetch(
            import.meta.env.VITE_OPEN_API_URL,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization:
                        `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512" // Corrected size format
                })
            }
        )
    
        let data = await response.json();
        console.log(data)
    }
    

    return (
        <div className='ai-image-generator'>
             <div className="header">AI Image <span>Generator</span></div> 
             <div className="image-loading">
                <div className="image">
                    <img src={image_url==="/"?default_image:image_url} alt="default" />
                </div>
             </div>
             <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want To See'/>
                <div className="generate-btn" onClick={()=>ImageGenerator()}>Generate</div>
             </div>
        </div>
    )
}

export default ImageGenerator