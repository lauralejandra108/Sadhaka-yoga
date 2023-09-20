// eslint-disable-next-line no-unused-vars
import './App.css';
import { useState } from 'react';
import Standing from './family-asanas/standing';
import Sitting from './family-asanas/sitting';
import ForwardExtension from './family-asanas/forward-extension';
import AbdominalContraction from './family-asanas/abdominal-contraction';
import Backbends from './family-asanas/Backbends';
import Inversions from './family-asanas/Inversions';
import Twist from './family-asanas/Twist';

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
         : selectedComponent === 'forwardExtension'
           ? (
        <ForwardExtension />
             )
           : selectedComponent === 'abdominalContraction'
             ? (
        <AbdominalContraction />
               )
             : selectedComponent === 'backbends'
               ? (
        <Backbends />
                 )
               : selectedComponent === 'inversions'
                 ? (
        <Iversions />
                   )
                 : selectedComponent === 'twist'
                   ? (
        <twist />
                     )
                   : (

    <><img src="./src/assets/logo.png" alt="logo de sadhaka" className='logo' /><h1>Familia de Āsanas</h1><div className='container-family-asanas'>
            <button id='button-family'className='standing' onClick={() => handleComponentChange('standing')}>Posturas de pie</button>
            <button id='button-family' className='sitting' onClick={() => handleComponentChange('sitting')}>Posturas sentadas</button>
            <button id='button-family' className='forward-extension' onClick={() => handleComponentChange('forwardExtension')}>Flexión anterior</button>
            <button id='button-family' className='flex-forw' onClick={() => handleComponentChange('abdominalContraction')}>Contracción abdominal</button>
            <button id='button-family' className='backbends' onClick={() => handleComponentChange('backbends')}>Flexiones hacia atrás</button>
            <button id='button-family' className='inversions' onClick={() => handleComponentChange('inversions')}>Invertidas</button>
            <button id='button-family' className='twist' onClick={() => handleComponentChange('twist')}>Torsión</button>
          </div></>
                     )}
     </>
  );
};

export default App;
