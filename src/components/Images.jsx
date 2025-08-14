import React from 'react'
import { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Images = () => {
    const {imagesData} = useContext(PixabayContext);
  return (
    <div className='container'>
    <div className='flex my-25'>
        {imagesData.map((image) => (
        <div key={image.id}>
            <div className='item'>
                <img src={image.largeImageURL} alt="pic" />
            </div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Images