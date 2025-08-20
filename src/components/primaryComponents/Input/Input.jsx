import React from 'react'

const Input = ({bgcolor="#fff", colorParams="black", type="text", placeholder="anything", label="Free", required}) => {
  
  return (
   <>
    <div style={{display:"flex", gap:"10px"}} >
      <label>{label}: </label>
      <input type={type} placeholder={placeholder} required={required} style={{background: bgcolor, color: colorParams, margin: "5px", width:"100%", height:"50px", borderRadius:"20px", textAlign:"center"}} />
    </div>
   </>
  )
}

export default Input
