import React from 'react'

const Product = ({image, name, price}) => {
  return (
    <>
      
    <img style={{ height: '300px', width: '300px' }} src={image}></img>
     <h2>{name}</h2>
     <h3>{price}</h3>
     </>
  )
}

export default Product
