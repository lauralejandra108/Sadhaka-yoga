// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './stading.css';
// eslint-disable-next-line no-unused-vars
import Card from './components/card';
import { images } from './import';

const Stading = ({ onClose }) => {
  const [showBox, setShowBox] = useState(false);
  const [cards, setCards] = useState([]);

  const [firstCard, setFirstCard] = useState([]);
  const [secondCard, setSecondCard] = useState([]);

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number, id) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.id === secondCard.id;
      match ? disableCards() : unflipCards();
    }
  };

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  return (
    <>
      {/* <img src="./src/assets/logo.png" alt="logo de sadhaka"  className='logo-family'/>
    <img src="./src/assets/back.png" alt="salir a familia de asanas" onClick={onClose} className="go-family" /> */}
      <div className={`Stading-box ${showBox ? 'show' : ''}`}>
        <div className="stadingBox">
          <div className="big-container">
            {
            cards.map((card, index) => (
              <Card
              name={card.asana}
              number={index}
              frontFace={card.src}
              flipCard={flipCard}
              unflippedCards={unflippedCards}
              disabledCards={disabledCards}
               />
            ))}

        </div>
      </div>
      <section className="section-estadistic">
        <h2 className="aciertos" id="estadisticas">
          Aciertos: <span id="contador-acietos">0</span>
        </h2>
        <h2 className="tiempo-restante" id="estadisticas">
          Tiempo: <span id="contador-cronometro">60</span> segundos
        </h2>
        <h2 className="movimientos" id="estadisticas">
          Movimientos: <span id="contador-movimientos"></span>
        </h2>
        <button className="start">iniciar juego</button>
      </section>
      </div>
    </>
  );
};

export default Stading;
