import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
// import FavoriteMovie from '../context/UserContext';

const UserList = () => {
  //   const { favorite } = useContext(FavoriteMovie);
  const [listData, setListData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const moviesId = window.localStorage.movie
      ? window.localStorage.movie.split(',')
      : [];
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=92dea1141e59130aeca8e943ca19ccd5&language=en-US`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

//   to delete card each time use click on button delete to favorite
    useEffect(() => {
      if (listData.length > 0) {
        const moviesId = window.localStorage.movie
          ? window.localStorage.movie.split(',')
          : [];
        let filter = [];
        for (let i = 0; i < moviesId.length; i++) {
          const obj = listData.find((res) => res.id === parseInt(moviesId[i]));
          filter.push(obj);
        }
        setListData(filter);
      } else {
        setListData([]);
      }
      // eslint-disable-next-line
    }, [newData]);

 
  return (
    <div className="user-list-page">
      <h2>
        Favorite Movies <span>❤️</span>
      </h2>
      <div className="result">
        {listData.length > 0 &&
          listData.map((movie, index) => (
            <Card
              key={index}
              movie={movie}
              setNewData={setNewData}
              newData={newData}
              component="userList"
              listData={listData}
              setListData={setListData}
            />
          ))}
      </div>
    </div>
  );
};

export default UserList;
