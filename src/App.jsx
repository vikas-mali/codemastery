import { useState } from 'react';
import logoSrc from './assets/logo/Big Skillup logo-512.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logoSrc}/>
      <h1>Coming Soon</h1>
    </>
  )
}

export default App
