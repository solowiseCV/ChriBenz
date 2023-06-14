import React from 'react'
import "./Checkout.scss"
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';

const Checkout = () => {
  const [{basket} ]=useStateValue();
   
  return (
    <div className='checkout'>
      <div className="checkoutLeft">
       <img className='checkoutAd' src="https://img.freepik.com/premium-psd/checkout-button-sign-side-view-3d-rendering-icon-illustration-transparent-background_557469-2188.jpg?w=2000" alt="checkoutAd" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>At the moment you have  nothing in your basket,go to the prouct page click the "Add to basket " button next to the item you want to buy</p>
          </div>
        ):
        (
          <div>
            <h2 className='checkoutTitle'>Your shopping basket</h2>
                {
                  basket.map((item) =>
                    (
                    <CheckoutProduct
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))
                }
          </div>
        )
        }
        </div>
       {basket.length > 0 && (
        <div className='checkoutRight'>
              <Subtotal/>
        </div>
       )}
    </div>
  )
}

export default Checkout
