import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "hamza", 
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
      <Card username='Chai Aur Code' someObj={myObj} arr={newArr} />
      <Card username='hamza' pText='goat'/>
    </>
  )
}

export default App
