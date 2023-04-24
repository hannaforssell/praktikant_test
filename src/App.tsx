import './App.css'
import { Box } from './components/box'
import { useState } from 'react'

export const App = () => {
  const [colorOne, setColorOne] = useState("blue");
  return (
    <>
      <h1>Praktikant test</h1>
      <div className='main-container'>
        <Box onClick={() => setColorOne("red")} color={colorOne} />
      </div>
    </>
  )
}

export default App
