// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button.jsx'
import Input from './components/Input/Input.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to React</h1>
      <p style={{color: 'white', margin: "5px", textAlign:"center"}}>Inline styling</p>
      <div className="card">
        <Input type="text" bgcolor={"white"} colorParams={"black"}/>
        <br/>
        <Button bgcolor={"red"} action={()=>alert("Welcome")} text={"Alert"}/>
        <Button bgcolor={"orange"} text={"Alert"}/>
        <Button bgcolor={"white"} colorParams={"black"} text={"Alert"}/>
        <Button bgcolor={"green"} text={"Alert"}/>
        <Button bgcolor={"yellow"} colorParams={"black"} text={"Alert"}/>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Footer/>
    </>
  )
}

export default App
