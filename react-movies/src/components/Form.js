import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [sortData, setSortData] = useState(null);
  const [selectGenre, setSelectGenre] = useState('avenger');
  

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=92dea1141e59130aeca8e943ca19ccd5&query=${selectGenre}&language=en-US`
      )
      .then((result) => result.data)
      .then((data) => setMoviesData(data.results));
  }, [selectGenre]);

  const handleSort = (e) => {
    const id = e.target.id;
    setSortData(id);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log('handleChange', value);
    setSelectGenre(value);
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Enter a movie name"
            id="search-input"
            onChange={handleChange}
          />

          <input type="submit" value="Search" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad" onClick={handleSort}>
            Top<span>➔</span>
          </div>
          <div className="btn-sort" id="badToGood" onClick={handleSort}>
            Flop<span>➔</span>
          </div>
        </div>
      </div>
      <div className="result">
        {/* {sortData
          ? sortData === 'goodToBad'
            ? moviesData
                .sort((a, b) => b.vote_average - a.vote_average)
                .slice(0, 12)
                .map((movie, index) => <Card key={index} movie={movie} />)
            : moviesData
                .sort((a, b) => a.vote_average - b.vote_average)
                .slice(0, 12)
                .map((movie, index) => <Card key={index} movie={movie} />)
          : moviesData
              .slice(0, 12)
              .map((movie, index) => <Card key={index} movie={movie} />)} */}

        {moviesData
          .slice(0, 12)
          // eslint-disable-next-line 
          .sort((a, b) => {
            if (sortData === 'goodToBad') {
              return b.vote_average - a.vote_average;
            } else if (sortData === 'badToGood') {
              return a.vote_average - b.vote_average;
            } 
          })
          .map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
