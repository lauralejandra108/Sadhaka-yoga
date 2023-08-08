import React, { useState } from 'react';
import './hipopen.css';
const HipOpenBox = ({ onClose }) => {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <>
    
    <img src="./src/assets/logo.png" alt="logo de sadhaka"  className='logo-family'/>
    <img src="./src/assets/back.png" alt="salir a familia de asanas" onClick={onClose} className="go-family" />
 
   
    <div className={`hip-open-box ${showBox ? 'show' : ''}`}>
    <div className='position-container'>
    <div className="big-continer">
    <div id="one" className="box"></div>
    <div id="two" className="box"></div>
    <div id="three" className="box"></div>
    <div id="four" className="box"></div>
    <div id="five" className="box"></div>
    <div id="six" className="box"></div>
    <div id="seven" className="box"></div>
    <div id="eight" className="box"></div>
    <div id="nine" className="box"></div>
    <div id="ten" className="box"></div>
    <div id="ele" className="box"></div>
    <div id="twel" className="box"></div>
    <div id="thir" className="box"></div>
    <div id="fourt" className="box"></div>
    <div id="fift" className="box"></div>
    <div id="sixt" className="box"></div>
    <div id="sevent" className="box"></div>
    <div id="eghte" className="box"></div>
    <div id="ninet" className="box"></div>
    <div id="twenty" className="box"></div>
  </div>
  </div>
      </div>
      <section className='section-estadistic'>
        <h2 className='aciertos' id='estadisticas'>Aciertos: <span id='contador-acietos'>0</span></h2>
        <h2 className='tiempo-restante' id='estadisticas'>Tiempo: <span id='contador-acietos'>60</span> segundos</h2>
        <h2 className='movimientos' id='estadisticas'>Movimientos: <span id='contador-acietos'></span></h2>
        <button className='start'>iniciar juego</button>
      </section>
      </>
  );
};

export default HipOpenBox;
