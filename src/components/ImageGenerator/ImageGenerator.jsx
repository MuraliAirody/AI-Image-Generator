import './ImageGenerator.css'
const ImageGenerator = () => {
    return (
        <div className='ai-image-generator'>
             <div className="header">AI Image <span>Generator</span></div> 
             <div className="image-loading">
                <div className="image">
                    <img src="../Assets/default-image.jpg" alt="default" />
                </div>
             </div>
        </div>
    )
}

export default ImageGenerator