// eslint-disable-next-line no-unused-vars
import './App.css';
import { useState } from 'react';
import Stading from './stading';

export const App = () => {
  const [showStadingBox, setShowStadingBox] = useState(false);

  const toggleStadingBox = () => {
    setShowStadingBox(!showStadingBox);
  };
  const closeStadingBox = () => {
    setShowHipOpenBox(false);
  };

  return (
    <>
     {showStadingBox
       ? (
         <Stading onClose={closeStadingBox} />
         )
       : (
    <><img src="./src/assets/logo.png" alt="logo de sadhaka" className='logo' /><h1>Familia de Āsanas</h1><div className='container-family-asanas'>
            <button id='button-family'className='stading' onClick={toggleStadingBox}>Posturas de pie</button>
            <button id='button-family' className='arm-balance'>Equilibrio de brazos</button>
            <button id='button-family' className='foot-balance'>Equilibrio de pie</button>
            <button id='button-family' className='flex-forw'>Flexión anterior</button>
            <button id='button-family' className='forward'>Flexión posterior</button>
            <button id='button-family' className='inversions'>Invertidas</button>
            <button id='button-family' className='meditations'>Meditación</button>
            <button id='button-family' className='twist'>Torsión</button>
          </div></>
         )}
     </>
  );
};

export default App;
