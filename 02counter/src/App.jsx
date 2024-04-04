import './App.css'
import { useState } from 'react'

function App() {
  //let counter = 5

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter != 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter != 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
