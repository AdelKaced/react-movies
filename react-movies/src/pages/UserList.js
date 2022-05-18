import React, { useContext } from 'react';
import Card from '../components/Card';
import FavoriteMovie from '../context/UserContext';

const UserList = () => {
  const { favorite } = useContext(FavoriteMovie);

  return (
    <div className="result">
      {favorite.map((movie) => (
        <Card movie={movie} component='userList' />
      ))}
    </div>
  );
};

export default UserList;
