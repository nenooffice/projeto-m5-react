import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { Person } from "./interfaces"

function App() {
  const [people, setPeople] = useState<Person[]>([
    {name: "Eugenio", age: 24},
    {name: "Arthur", age: 18},
    {name: "Georgia", age: 16},
    {name: "Virginia", age: 13},
    {name: "Carol", age: 24}
  ])

  return (
    <div className="App">
      <div>
        {people.map((elem, index ) => 
        <Card person={elem} key={index} />)}
      </div>
   </div>
  )
}

export default App
