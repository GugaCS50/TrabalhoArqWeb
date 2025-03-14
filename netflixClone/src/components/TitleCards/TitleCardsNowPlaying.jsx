import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';

const TitleCardsNowPlaying = ({title}) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTA2MWJlYjE2OGFkY2VhMzI4MjM4MTYxYjMyZmU2NCIsIm5iZiI6MTc0MTkxNzE5NC44NzM5OTk4LCJzdWIiOiI2N2QzOGMwYWYxNzQ1OWM4ZmY1M2E5YTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BsMfubSiYzBrb-PkriK8gjFQNgaKkHuJcZhf3SJ2DSY'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])
  return (
    <div className='title_cards'>
      <h2>{title?title:"Em Cartaz"}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt=''/>
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCardsNowPlaying
