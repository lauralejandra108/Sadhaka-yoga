import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import { imagesInverted } from '../import-inverted';
import '../family-asanas/style.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Confetti from 'react-confetti';

const Inverted = ({ onClose }) => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  const [showCongratulations, setShowCongratulations] = useState(false);
  const [matchedCount, setMatchedCount] = useState(0);

  useEffect(() => {
    return () => {
      setCards([]);
    };
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    shuffleArray(imagesInverted);
    setCards(imagesInverted);
  }, []);

  useEffect(() => {
    checkForMatch();
    if (cards.length === 0) {
      // Cuando se han girado todas las cartas, mostrar felicitaciones y activar confeti
      showCongratsAnimation();
      setShowCongratulations(true);
    }
  }, [secondCard]);

  const flipCard = (id, number) => {
    if (firstCard.id === id && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.id) {
      setFirstCard({ id, number });
    } else if (!secondCard.id) {
      setSecondCard({ id, number });
    }
    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.id && secondCard.id) {
      const match = firstCard.id === secondCard.id;
      match ? disableCards() : unflipCards();
    }
  };
  useEffect(() => {
    // Verifica si todas las cartas están emparejadas
    if (matchedCount === cards.length / 0) {
      showCongratsAnimation(); // Mostrar la animación de felicitaciones
    }
  }, [matchedCount, cards]);

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

  const showCongratsAnimation = () => {
    setTimeout(() => {
      setShowCongratulations(false);
    }, 3000); // Oculta la animación después de 3 segundos (ajusta el tiempo según tus preferencias)
  };

  return (
    <>
      <img src="./src/assets/logo.png" alt="logo de sadhaka" className="logo-family" />
      <img
        src="./src/assets/back.png"
        alt="salir a familia de asanas"
        onClick={onClose}
        className="go-family"
      />

      <div className="app">
        <div className="big-container">
          {cards.map((card, index) => (
            <Card
              key={index} // Agrega una clave única para evitar advertencias
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

      <TransitionGroup>
        {showCongratulations && (
          <CSSTransition classNames="congrats-animation" timeout={300} unmountOnExit>
            <div className="congrats-container">
              <p>Felicitaciones!</p>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>

      {/* Agrega el componente Confetti */}
      {showCongratulations && (
        <Confetti
          numberOfPieces={400} // Personaliza la cantidad de confeti
          recycle={false} // Impide que el confeti se recicle
        />
      )}
    </>
  );
};

export default Inverted;
