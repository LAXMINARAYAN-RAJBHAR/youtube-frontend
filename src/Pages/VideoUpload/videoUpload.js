import React,{useState} from 'react'
import './videoUpload.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';

const VideoUpload = () => {
  const [inputField, setInputField] = useState({"title":"","description":"","videoLink":"","thumbnail":"","videoType":""});
  
  const handleOnChangeInput = (event, name)=>{
        setInputField({
            ...inputField,[name]:event.target.value
        })
    }
    console.log(inputField)
  return (
    <div className='videoUpload'>
      <div className="uploadBox">
        <div className="uploadVideoTitle">
                <CloudUploadIcon sx={{fontSize: "54px", color:"orange"}} />
                Upload Video
        </div>

        <div className="uploadForm">
            <input type="text" value={inputField.title} onChange={(e)=>{handleOnChangeInput(e,"title")}} placeholder='Title of Video' className='uploadFormInputs' />
            <input type="text" value={inputField.description} onChange={(e)=>{handleOnChangeInput(e,"description")}} placeholder='Description' className='uploadFormInputs' />
            <input type="text" value={inputField.videoType} onChange={(e)=>{handleOnChangeInput(e,"videoType")}} placeholder='Category' className='uploadFormInputs' />
            <div>Thumbnail <input type='file' accept="image/*" /></div>
            <div>Video <input type='file' accept="video/mp4, video/webm, video/*" /></div>

        </div>

            <div className="uploadBtns">
                <div className="uploadBtns-form">Upload</div>
                <Link to={'/'} className="uploadBtns-form">Home</Link>
            </div>   

      </div>
    </div>
  )
}

export default VideoUpload
