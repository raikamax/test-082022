import React, { useState, useEffect } from 'react';
import axios from "axios";
import { data } from 'jquery';


const Cards = ({ nome }) => {
  const [cards, setCards] = useState();
  const [addCard, setAddCard] = useState(0);
  const [cardLength, setCardLength] = useState(6);

  const getPoint = () => {
    var randomPoint = Math.floor(Math.random() * 10);
    return randomPoint;
  }
  
  // const getPoint = () => {
  //   for (let index = 0; index < cardLength; index++) {
  //     var randomPoint = Math.floor(Math.random() * 10);
  //     setPoints(randomPoint[index]);
  //     // console.log(points[index])
  //   }
  // }

  const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
  });

  useEffect(() => {
    // getPoint();


    api.get("/character/")
      .then((response) => {
        // var randomPoint = Math.floor(Math.random() * 10);
        // var dataResult = response.data.results.slice(0, 5);
        
        // for (let index = 0; index < dataResult.length; index++) {
        //   const element = array[index];
          
        // }

        // console.log(dataResult)

        // var teste = dataResult
        // dataResult.forEach(element => {
        //   // element.concat({pontos: randomPoint});
        //   element.push('teste')
        //   console.log(element)
        // });

        //   .map(function (item){
        //     return item.concat({pontos: randomPoint});
        //  });     
        // .push({pontos: randomPoint}))

        setCards(response.data.results.slice(0, 5))
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  const nextCard = () => {
    if (addCard <= 3) {
      setAddCard(addCard + 1);
      setCardLength(cardLength + 1);

      api.get("/character/")
        .then((response) => {
          console.log(response.data.results);
          setCards(response.data.results.slice(0, cardLength))
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }
  }

  const shuffleCards = () => {
    shuffleArray(cards);
  }

  const shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setCards();

    // timeout usado para "dar um tempo" para limpar o state
    setTimeout(() => {
      setCards(array);
    }, 1);
  }


  return (
    <>
      <div className="cardsPage">
        <h2 className="cardsPage__name">
          Olá, {nome}
        </h2>

        <ul className="cardsPage__items">
          {cards?.map((item, index) => (
            <li className="cardsPage__items-item" key={item.id}>
              <img className='cardsPage__items-item--img' src={item.image} alt="" />
              <h2 className='cardsPage__items-item--name'>{item.name}</h2>
              <span className='cardsPage__items-item--desc'>{item.species}</span>
              <span className='cardsPage__items-item--point'>
                Ponto: {getPoint()}
              </span>
            </li>
          ))}
        </ul>

        {addCard < 3 && (
          <button className="cardsPage__buttonLoad" onClick={nextCard}>+1 CARTA</button>
        )}
        <button className="cardsPage__buttonShuffle" onClick={shuffleCards}>Embaralhar</button>
      </div>
    </>
  )
}

export default Cards;