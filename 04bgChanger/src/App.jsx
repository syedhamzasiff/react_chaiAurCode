import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive");
  
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="bg-white rounded-lg shadow-md p-6 fixed bottom-0 left-0 right-0">
        <div className="grid grid-cols-7 gap-2">
          <button onClick={() => setColor('black')} className="bg-black rounded-3xl" ></button>
          <button onClick={() => setColor('yellow')} className="bg-yellow-500 rounded-3xl"></button>
          <button onClick={() => setColor('green')} className="bg-green-500 rounded-3xl"></button>
          <button onClick={() => setColor('indigo')} className="bg-indigo-500 rounded-3xl"></button>
          <button onClick={() => setColor('blue')} className="bg-blue-500 rounded-3xl"></button>
          <button onClick={() => setColor('pink')} className="bg-pink-500 rounded-3xl"></button>
          <button onClick={() => setColor('grey')} className="bg-gray-500 rounded-3xl aspect-square" id="grey"></button>
        </div>
      </div>
    </div>

  )
}

export default App
