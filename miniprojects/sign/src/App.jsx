import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpToNewsLetter from './components/SignUpToNewsLetter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpToNewsLetter/>
    </>
  )
}

export default App
