import React from 'react'

const CheckoutProduct = ({title,image,price,rating}) => {
  return (
    <div className='checkoutProduct'>
           <img className='checkoutProductImg' src={image} alt="" />
           <div className="checkoutProductInfo">
             <h2>{title}</h2>
              <p>
               <small>#</small>
               <strong>{price}</strong> 
               </p>
               <div className="checkoutProductRating">
               {
                 Array(rating)
                .fill()
                .map((_)=>(
                  <p>⭐</p>
                ))
               }
               </div>
               <button>Remove from basket</button>
           </div>
        
    </div>
  )
}

export default CheckoutProduct
