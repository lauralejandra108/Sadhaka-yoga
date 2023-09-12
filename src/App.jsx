// eslint-disable-next-line no-unused-vars
import './App.css';
import { useState } from 'react';
import Standing from './standing';
import Sitting from './sitting';
export const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(''); // Estado para rastrear el componente seleccionado

  // Función para cambiar el componente seleccionado
  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };
  return (
    <>
     {selectedComponent === 'standing'
       ? (
        <Standing />
         )
       : selectedComponent === 'sitting'
         ? (
        <Sitting />
           )
         : selectedComponent === 'other'
           ? (
        <OtherComponent />
             )
           : (

    <><img src="./src/assets/logo.png" alt="logo de sadhaka" className='logo' /><h1>Familia de Āsanas</h1><div className='container-family-asanas'>
            <button id='button-family'className='standing' onClick={() => handleComponentChange('standing')}>Posturas de pie</button>
            <button id='button-family' className='arm-balance' onClick={() => handleComponentChange('sitting')}>Equilibrio de brazos</button>
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
