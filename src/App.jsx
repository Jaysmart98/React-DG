// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to React</h1>
      <div className="card">
        <Button bgcolor={"red"} action={()=>alert("Welcome")} text={"Alert"}/>
        <Button bgcolor={"orange"}/>
        <Button bgcolor={"white"} colorParams={"black"}/>
        <Button bgcolor={"green"}/>
        <Button bgcolor={"yellow"} colorParams={"black"}/>
        <Button bgcolor={"purple"}/>
        <Button bgcolor={"blue"}/>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
