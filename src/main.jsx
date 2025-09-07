import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import StopWatch from './components/secondaryComponents/StopWatch/StopWatch.jsx'
// import Todo from './components/secondaryComponents/Todo/Todo.jsx'
import Categories from './components/secondaryComponents/Categories/Categories'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Categories />
  </StrictMode>
)
