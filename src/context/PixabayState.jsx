import React from 'react'
import PixabayContext from './PixabayContext'
import { useState, useEffect } from 'react'

const PixabayState = (props) => {

    const [imagesData, setImagesdata] = useState([])
    const [query, setQuery] = useState('london')

    const api_key = "51535137-180646dc3b6f28a39baa614a6";

    useEffect(() => {
        const fetchData = async () =>{
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`);
            const data = await api.json();
            setImagesdata(data.hits)
            console.log(data.hits);
            
        };
        fetchData();
    },[query])

       const fetchImageByCategory = async (cat) =>{
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`);
            const data = await api.json();
            setImagesdata(data.hits)
            console.log(data.hits);
       }
  return (
    <PixabayContext.Provider value={{
            imagesData,
            fetchImageByCategory,
            setQuery
    }}>{props.children}</PixabayContext.Provider>
  )
}

export default PixabayState