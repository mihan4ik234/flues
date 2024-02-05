import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Zaiavka from './pages/zaiavka/zaiavka'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Zaiavka></Zaiavka>
    </>
  )
}

export default App
