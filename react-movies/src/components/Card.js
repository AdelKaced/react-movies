import React, { useContext } from 'react';
import FavoriteMovie from '../context/UserContext';

const genre = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const Card = ({ movie, component }) => {
  const { favorite, setFavorite } = useContext(FavoriteMovie);

  const dateFormat = (date) => {
    let [yy, mm, dd] = date.split('-');
    return [dd, mm, yy].join('/');
  };

  const genreFormat = (genreId) => {
    const genresName = [];
    for (let i = 0; i < genreId.length; i++) {
      genresName.push(genre.find((res) => res.id === genreId[i]).name);
    }
    return genresName;
  };

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : './img/poster.jpg'
        }
        alt="poster"
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Released on the {dateFormat(movie.release_date)}</h5>
      ) : (
        ' '
      )}

      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>

      <ul>
        {genreFormat(movie.genre_ids).length > 0 ? (
          genreFormat(movie.genre_ids).map((genreName, index) => (
            <li key={index}>{genreName}</li>
          ))
        ) : (
          <li>UnClassify</li>
        )}
      </ul>
      {movie.overview && (
        <div>
          <h3>Synopsis</h3>
          <p>{movie.overview}</p>
        </div>
      )}
      {component ==='userList' ? (
        <div
          className="btn"
          onClick={() => {
            const newFavorite = favorite.filter((res) => res.id !== movie.id);
            setFavorite(newFavorite);
          }}
        >
          Delete to Favorite
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            console.log(movie);
            setFavorite([...favorite, movie]);
          }}
        >
          Add to Favorite
        </div>
      )}
    </div>
  );
};

export default Card;
