import React from 'react';
import './CheckoutProduct.css';
import { IBasketProduct } from '../types';
import { useDispatch } from 'react-redux';
import { removeFromBasket, increaseItemQuantity, decreaseItemQuantity } from '../store/reducers/basket';


const CheckoutProduct: React.FC<IBasketProduct> = ({ id, image, title, price, rating, quantity }) => {
  
  const dispatch = useDispatch();

  const onRemoveFromBasket = () => {
    dispatch(removeFromBasket({
      product: {
          id: id,
          title: title,
          price: price,
          image: image,
          rating: rating,
          quantity: quantity
        },
        type: 'REMOVE_FROM_BASKET'
      }))
    };


  const onIncreaseItemQuantity = () => {
    dispatch(increaseItemQuantity({
      product: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
        quantity: quantity
      },
      type: 'INCREASE_ITEM_QUANT'
    }))
  };  


  const onDecreaseItemQuantity = () => {
    dispatch(decreaseItemQuantity({
      product: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
        quantity: quantity
      },
      type: 'DECREASE_ITEM_QUANT'
    }))
  };  
    
    
  return (
    <div className='checkoutProduct'>
      <img 
        src={image}
        alt=''
        className='checkoutProduct__image'
      />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill('')
            .map( el => (
              <p>⭐</p>  
            ))
          }  
        </div>
        <button 
          className='checkoutProduct__button' 
          onClick={ onRemoveFromBasket }
        >
          Remove from Basket
        </button>
        <div className='checkoutProduct__qtyButtonsDiv'>
          <button 
            className='checkoutProduct__minus'
            onClick={onDecreaseItemQuantity}
          >-
          </button>
          <p className='checkoutProduct__qty'>Qty: {quantity}</p>
          <button 
            className='checkoutProduct__plus'
            onClick={onIncreaseItemQuantity}
          >+
          </button>
        </div>  
      </div>
    </div>
  );
};

export default CheckoutProduct;