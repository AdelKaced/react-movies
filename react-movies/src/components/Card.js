import React from 'react';
// import FavoriteMovie from '../context/UserContext';

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

const Card = ({
  movie,
  component,
  setNewData,
  newData,
  setListData,
  listData,
}) => {
  // const { favorite, setFavorite } = useContext(FavoriteMovie);

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

  const addStorage = () => {
    let storedData = window.localStorage.movie
      ? window.localStorage.movie.split(',')
      : [];
    if (!storedData.includes(movie.id.toString())) storedData.push(movie.id);
    window.localStorage.movie = storedData;
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movie
      ? window.localStorage.movie.split(',')
      : [];
    const deleteData = storedData.filter((res) => res !== movie.id.toString());
    window.localStorage.movie = deleteData;
    // let filter = [];
    // for (let i = 0; i < storedData.length; i++) {
    //   const obj = listData.find((res) => res.id == storedData[i]);
    //   filter.push(obj);
    // }
    setNewData(!newData);
    // setListData(filter);
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
        {movie.genre_ids
          ? genreFormat(movie.genre_ids).length > 0 &&
            genreFormat(movie.genre_ids).map((genreName, index) => (
              <li key={index}>{genreName}</li>
            ))
          : movie.genres.map((genre) => <li>{genre.name}</li>)}
      </ul>
      {movie.overview && (
        <div>
          <h3>Synopsis</h3>
          <p>{movie.overview}</p>
        </div>
      )}
      {component === 'userList' ? (
        <div
          className="btn"
          onClick={deleteStorage}
          // const newFavorite = favorite.filter((res) => res.id !== movie.id);
          // setFavorite(newFavorite);
        >
          Delete to Favorite
        </div>
      ) : (
        <div
          className="btn"
          onClick={addStorage}
          // setFavorite([...favorite, movie]);
        >
          Add to Favorite
        </div>
      )}
    </div>
  );
};

export default Card;
