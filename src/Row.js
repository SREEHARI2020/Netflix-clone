import React,{useState,useEffect} from 'react'
import axios from './axios'

const Row = ({title,fetchUrl}) => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{

        const fetchData=async()=>{
            const request= await axios.get(fetchUrl);
            console.log(request)

            setMovies(request);
        }
        fetchData();

    },[])


    return (
        <div>
            {title}
        </div>
    )
}

export default Row
