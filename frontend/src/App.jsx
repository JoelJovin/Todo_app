import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  return (
    <div>
      <h1>API Fetch Data</h1>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </div>
  )
}

export default App
