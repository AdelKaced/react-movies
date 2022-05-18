import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import UserList from './pages/UserList';
import FavoriteMovie from './context/UserContext'
 
const App = () => {
  const [favorite, setFavorite] = useState([]);


  return (
    <div>
        <BrowserRouter>
      <FavoriteMovie.Provider value={{favorite, setFavorite}}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<UserList />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </FavoriteMovie.Provider>
        </BrowserRouter>
    </div>
  );
};

export default App;
