import { useState } from 'react';
import logoSrc from './assets/logo/Big Skillup logo-512.png'
import './App.css'
import Header from './components/common/header'

function App() {

  return (
    <>
    {/* <Header/> */}
      <img src={logoSrc}/>
      <h1 className="text-3xl font-bold underline">Coming Soon</h1>      
    </>
  )
}

export default App
