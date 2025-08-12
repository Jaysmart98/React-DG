import React from 'react'

const Input = ({bgcolor, colorParams}) => {
  return (
    <input style={{background: bgcolor, color: colorParams, margin: "5px", width:"600px", height:"50px", borderRadius:"20px", textAlign:"center"}}></input>
  )
}

export default Input
