import HipOpenBox from './hip-open/hipopen'; // Asegúrate de que la ruta sea correcta
import './App.css'
import { useState } from 'react';


  export const App = () => {
    const [showHipOpenBox, setShowHipOpenBox] = useState(false);

  const toggleHipOpenBox = () => {
    setShowHipOpenBox(!showHipOpenBox);
  };
  const closeHipOpenBox = () => {
    setShowHipOpenBox(false);
  };

  return (
    <>
     {showHipOpenBox ? (
         <HipOpenBox onClose={closeHipOpenBox} />
      ) : (
    <><img src="./src/assets/logo.png" alt="logo de sadhaka" className='logo' /><h1>Familia de Āsanas</h1><div className='container-family-asanas'>
            <button id='button-family'className='hip-open' onClick={toggleHipOpenBox}>Apertura de caderas</button>
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

export default App
