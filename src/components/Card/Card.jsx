import React from 'react'
import Teen from '../../assets/Images/teen.jpg'
import Button from '../Button/Button.jsx'
import Input from '../Input/Input.jsx'
import './Card.css'

const Card = ({ text, description, image, btnText }) => {
  return (
    <>
    <div className='card-container'>
      <div className='cardComponent'>
          <div style={{ justifyContent: "center" }} >
              <img src={image} alt="Teen" width={100} height={100}/>
          </div>
          <Input label={""}/>
          <p>{text}</p>
          <p>{description}</p>
          <Button bgColor={"#000"} colorParams={"red"} action={()=> alert("Button clicked")} text={btnText}/>
      </div>
    </div>
    </>
  )
}

export default Card