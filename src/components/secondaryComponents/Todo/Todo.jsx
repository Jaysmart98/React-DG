import Input from './components/PrimaryComponents/Input/Input'
import Button from './components/PrimaryComponents/Button/Button'
import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <div className='input-container'>
        <Input label={"Task"} placeholder={"Enter a task"} />
        <Button bgColor={"#000"} colorParams={"red"} action={()=> alert("Button clicked")} text={"Add"}/>
</div>
      </div>
    </>
  )
}

export default App
