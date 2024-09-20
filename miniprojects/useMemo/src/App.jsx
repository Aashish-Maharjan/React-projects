import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemoHook from './components/MemoHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MemoHook />
    </>
  )
}

export default App
