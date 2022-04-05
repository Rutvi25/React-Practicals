import React from 'react'

function PhotoPreview({fileURL}) {
  return (
    <img className='preview-img' src={fileURL} alt='preview-img' />
  )
}

export default PhotoPreview