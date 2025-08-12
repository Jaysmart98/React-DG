import React from 'react'

const Button = ({bgcolor, colorParams, action =()=>{}}) => {
  return (
    <button style={{background: bgcolor, color: colorParams, margin: "5px"}}
    onClick={action}> Save </button>
  )
}

export default Button
