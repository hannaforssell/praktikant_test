import './App.css'
import { Toggle } from './misc/comps/toggle'
import { Text } from './components/text'
import { useState } from 'react'
import { Button } from './components/button'

export const App = () => {
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
          <Button text='Klicka här för att rendera boxar' />
        }
      </div>

      <Toggle onClassClick={onClassClick} onFuncClick={onFuncClick} />
    </div>
  )
}

export default App
