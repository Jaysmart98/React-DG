import './App.css'
// import cardDetails from '../constant/index.js';
import Button from './components/primaryComponents/Button/Button.jsx'
// import Card from './components/secondaryComponents/Card/Card.jsx';
import Input from './components/primaryComponents/Input/Input.jsx'
import { useEffect, useState } from 'react';

function App() {


const [value, setValue] = useState("Welcome");
const [list, setNewList] = useState(["1. name ", "2. gender ", "3. dept "]);
const [count, setCount] = useState(60);
const [instruction, setNewInstruction] = useState("Please read the instruction carefully before you start the exam.");


// const [data, setData] = useState [
//   {
//     text: "Good Morning",
//     description: "Welcome to my react class",
//     btnText:"View"
//   },
//    {
//     text: "Good Morning",
//     description: "Welcome to my react class",
//     btnText:"View"
//   }

// ];

useEffect(() => {
  if (count > 1) {
    setTimeout(() => {
      setCount( count - 1)
    }, 6000);
  }
}, [count]);



useEffect(() => {
 setInterval(() => {
    alert("Your can start your exam now!")
  }
  , 6000);
  return;
}, [])



  return (
    <>
    <h1>{value} {count}</h1>
    {/* <p>{instruction}</p> */}

    {/* <div className='cardContainer'>
      {cardDetails?.map((detail, index) => (
         <Card text={detail.text} description={detail.description} image={detail.image} btnText={detail.btnText} key={index}/>
      ))}
    </div> */}

      <div className="card">
        <Button bgColor={"red"} colorParams={"#fff"} action={()=> alert("welcome")} text={"Alert"}/>
        <Button  bgColor={"#000"} colorParams={"red"} action={()=> confirm("Are you sure you wonna close this")} text={"Confirm"}/>
        <Button  bgColor={"blue"} colorParams={"white"} action={() => prompt("Good code")} text={"Prompt"}/>
      </div>
      <div className='card'>
        <Input type={"text"} placeholder={"Enter your name"} label={"Name"} required={false}/>
        <br/>
        <Input type={"email"} placeholder={"Enter your email"} label={"Email"} required={true}/>
        <br />
        <Input type={"checkbox"} placeholder='Male' label={"gender"} />
         <Input type={"radio"} placeholder='Male' label={"gender"} />
      </div>

    <div>
      {list}
    </div>

      <Button  bgColor={"blue"} colorParams={"white"} action={() => setValue("Welcome to React Class")} text={"newValue"}/>
      <Button  bgColor={"blue"} colorParams={"white"} action={() => setNewList([...list, "4. LGBTQ"])} text={"newGender"}/>
      <Button  bgColor={"blue"} colorParams={"white"} action={() => setCount(count + 1)} text={"Increment Count"}/>
    </>
  )
}


export default App;