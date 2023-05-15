import './App.css'
import { Box } from './components/box'
import { Toggle } from './misc/comps/toggle'
import { Text } from './components/text'
import { useState } from 'react'

export const App = () => {
  const [colorOne, setColorOne] = useState("blue");
  const [colorTwo, setColorTwo] = useState("green");
  const [colorThree, setColorThree] = useState("pink");
  const [showClass, setShowClass] = useState(false);

  const onClassClick = () => {
    setShowClass(true)
  }

  const onFuncClick = () => {
    setShowClass(false)
  }

  return (
    <div className='page'>
      <h1>Praktikant test</h1>
      <div className='main-container'>
        {showClass ? <Text title='Funktionell komponent' /> :
          <>
            <Box onClick={() => setColorThree("purple")} color={colorThree} />
            <Box onClick={() => setColorTwo("yellow")} color={colorTwo} />
            <Box onClick={() => setColorOne("red")} color={colorOne} text='Lorem Ipsum' />
          </>
        }
      </div>
      <Toggle onClassClick={onClassClick} onFuncClick={onFuncClick} />
    </div>
  )
}

export default App
