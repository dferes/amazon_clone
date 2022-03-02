import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { IBasketProduct } from '../types';
import { useSelector } from 'react-redux';
import { selectProducts } from '../store/reducers/basket';


const Checkout: React.FC = () => {
  const basket = useSelector(selectProducts);

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img 
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <div>
          <h2 className='checkout__title'>
            Your shopping Basket
          </h2>  

          <div className='checkout__list'>
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
      </div>
      
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
};

export default Checkout