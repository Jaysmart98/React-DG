import './App.css'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card';
import Input from './components/Input/Input'
import teen from './assets/Images/teen.jpg'
import { useState } from 'react';

function App() {

const [value, setValue] = useState("Welcome");
const [list, setNewList] = useState(["1. name ", "2. gender ", "3. dept "]);


  const cardDetails = [
    {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    },
     {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    },
     {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    },
     {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    },
     {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    },
     {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    },
     {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    },
     {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    },
     {
      text: "Good Morning",
      description: "Welcome to my react class",
      image: teen,
      btnText:"View"
    }
  ]

  return (
    <>
    <h1>{value}</h1>

    

    <div className='cardContainer'>
      {cardDetails?.map((detail, index) => (
         <Card text={detail.text} description={detail.description} image={detail.image} btnText={detail.btnText} key={index}/>
      ))}
      
    </div>
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
      
    </>
  )
}

export default App;