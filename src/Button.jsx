import React from 'react'

const Button = ({label, onClick,color='blue'}) => {
  return (
    <>
      <button style={{backgroundColor:color}} onClick={onClick}>
       {label}
      </button>
    </>
  )
}

export default Button
