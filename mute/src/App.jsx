import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import on from '/Users/destinroyer/Code/CP_Work/Week_7/Day_4/react-mute/icons/on.svg'
import off from '/Users/destinroyer/Code/CP_Work/Week_7/Day_4/react-mute/icons/off.svg'

function App() {

  const [image, setImage] = useState(on)

  const switchImg = () => {
    if (image == on){
      setImage(off)
    }
    else{
      setImage(on)
    }
  }
 
  return (
    <div className="App">
      <button><img src={image} alt="my image" onClick={switchImg} /></button>
    </div>
  )
}

export default App
