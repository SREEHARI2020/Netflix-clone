import React,{useState,useEffect} from 'react'
import axios from './axios';

const Row = ({title,fetchUrl}) => {
    const base_url = "https://image.tmdb.org/t/p/original/"; //for images
    const [movies, setMovies] = useState([])
    useEffect(()=>{

        const fetchData=async()=>{
            const request= await axios.get(fetchUrl);
            console.table(request.data.results)

            setMovies(request.data.results);
        }
        fetchData();

    },[fetchUrl])


    return (
        <div className="row">
           <h2>{title}</h2>
           <div className="row_posters">
               {movies.map((movie)=>(
               <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>))}
           </div>
        </div>
    )
}

export default Row
