import React from 'react'
import "./Product.scss"
import { useStateValue } from '../../StateProvider'

const Product = ({id,title,image,price,rating}) => {
  const [{bsket},dispatch]=useStateValue();
  const addToBasket= ()=>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id,
        title,
        image,
        price,
        rating
      }

    })
  }

  return (
    <>
    <div className='product'>
      
      
       <div className="productInfo"> 
       
            <p className='title'>{title}</p>
            <p  className='productPrice'>
                   <small>#</small>
                   <strong>{price}</strong>
             </p>

           <div className="productRating">
               {
                 Array(rating)
                .fill()
                .map((_)=>(
                  <p>⭐</p>
                ))
               }
            </div>

          </div>

      <img className='productImg' src={image} alt="" />
      <button onClick={addToBasket}>Add To Cart</button>

    </div>
     
      </>

  )
}

export default Product
