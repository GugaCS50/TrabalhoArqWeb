import React, { useEffect, useState } from 'react';
import './Player.css';
import back_icon from '../../assets/back_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });
  
  const [isFavorite, setIsFavorite] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2UzNGUyZWY1M2RhNjVjZmJhNTUyY2U1ODA4M2Q3MyIsIm5iZiI6MTc0MTc0Mzc5Ni41Nywic3ViIjoiNjdkMGU2YjQzNjAyMDI2OTA2ODE0OTVlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.tsygZwkh__To2InGKSkRN_TMUehxKGJMsyNhpY0AJtw'
    }
  };
  
  useEffect(() => {
    localStorage.setItem('lastWatchedId', id);

    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    setIsFavorite(favoriteMovies.includes(id));
  }, [id]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [id]);

  const toggleFavorite = () => {
    let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    if (favoriteMovies.includes(id)) {
      favoriteMovies = favoriteMovies.filter(movieId => movieId !== id);
    } else {
      favoriteMovies.push(id);
    }
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    setIsFavorite(!isFavorite);
  };
  
  return (
    <div className='player'>
      <img src={back_icon} alt='' onClick={() => navigate(-2)} />
      <iframe 
        width='90%' 
        height='90%' 
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        title='trailer' 
        frameBorder='0' 
        allowFullScreen>
      </iframe>
      <div className='player_info'>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        <button className='favorite-button' onClick={toggleFavorite}>
          {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </button>
      </div>
    </div>
  );
};

export default Player;

