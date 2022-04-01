import React, {useState} from 'react'

function PhotoPreview({file}) {
  const [preview, setPreview] = useState(null)
  const reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = () => {
    setPreview(reader.result)
  };
  return (
    <img className='preview-img' src={preview} alt='preview-img' width='40px'/>
  )
}

export default PhotoPreview