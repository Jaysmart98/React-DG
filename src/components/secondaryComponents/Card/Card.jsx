import React from 'react'
// import teen from '../../assets/Images/Teen.jpg'
import Button from '../../primaryComponents/Button/Button.jsx'
import Input from '../../primaryComponents/Input/Input.jsx'
import './Card.css'

const Card = ({ text, description, image, btnText }) => {
  return (
    <>
    <div className='card-container'>
      <div className='cardComponent'>
          <div style={{ justifyContent: "center" }} >
              <img src={image} alt="teen" width={100} height={100}/>
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