// main import
import React, { useState } from 'react';

// utils
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import Login from '../components/login';
import Cards from '../components/cards';

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [nome, setNome] = useState('');

  return (
    <>
      {!loggedIn ? (
        <>
          <Login setLoggedIn={setLoggedIn} setNome={setNome} nome={nome} />
        </>
      ) : (
        <>
          <Cards nome={nome} />
        </>
      )}
    </>
  )
}

export default Main;