import React from 'react'
// import useButton from './useButton';

const Button = ({bgcolor, colorParams, action =()=>{}, text}) => {
  // const [value, setValue] = useButton();
  return (
    <button style={{background: bgcolor, color: colorParams, margin: "5px"}}
    onClick={action}> Save </button>
  )
}

export default Button
