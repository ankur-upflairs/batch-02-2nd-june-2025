import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './Events'
import State from './State'
import Form from './Form'
import ToDoList from './ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Events /> */}
    {/* <State /> */}
    {/* <Form/> */}
    <ToDoList />
    </>
  )
}

export default App
