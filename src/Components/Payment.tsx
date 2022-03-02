import React from 'react';
import './Payment.css';
import { getBasketQuantity, selectProducts } from '../store/reducers/basket';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import { IBasketProduct } from '../types';
import { Link } from 'react-router-dom';


const Payment: React.FC = () => {
  const basket = useSelector(selectProducts);

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
            <Link to='/checkout'>{getBasketQuantity(basket)} items</Link>
          )
        </h1>
        
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>  
          </div> 
          <div className='payment__address'>
            <p>{'user?.address will go here'}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>  
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>  
          <div className='payment__items'>
          { 
            basket.map( (prod: IBasketProduct) => (
              <CheckoutProduct 
                key={`${prod.id}__${prod.quantity}`}
                id={prod.id}
                title={prod.title}
                image={prod.image}
                price={prod.price}
                rating={prod.rating}
                quantity={prod.quantity}
              />
            ))
          }  
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__detail'>

          </div>  
        </div>
      </div>
    </div>
  )
}

export default Payment;