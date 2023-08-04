import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <>
    <img src="./src/assets/logo.png" alt="logo de sadhaka" className='logo' />
      <h1>Familia de Āsanas</h1>
      <div className='container-family-asanas'>
        <button className='hip.open'>Apertura de caderas</button>
        <button className='arm-balance'>Equilibrio de brazos</button>
        <button className='foot.banace'>Equilibrio de pie</button>
        <button className='flex-ante'>Flexión anterior</button>
        <button className='forward'>Flexión posterior</button>
        <button className='inversions'>Invertidas</button>
        <button className='meditations'>Meditación</button>
        <button className='twist'>Torsión</button>
      </div>
      
    </>
  )
}

export default App
