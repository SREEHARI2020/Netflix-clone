import axios from './axios'
import React, {useState,useEffect}from 'react'
import requests from './request';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(()=>{

        const fetchData=async()=>{

            const request= await axios.get(requests.fetchTrending);
            
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length -1)]
            )
        }
        fetchData();


    },[])

    console.log(movie);
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
          }}
        >
            <div className="banner_contents">
hey boys
            </div>

        </header>
    )
}

export default Banner
