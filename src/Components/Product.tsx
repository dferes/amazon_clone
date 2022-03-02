import React from 'react';
import './Product.css';
import { IProduct } from '../types';
import { addToBasket, getItemQuantity } from '../store/reducers/basket';  
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProducts } from '../store/reducers/basket';


const Product: React.FC<IProduct> = ({ id, title, price, image, rating }) => {
  const basket = useSelector(selectProducts);
  const dispatch = useDispatch();

  const onAddToBasket = () => {
    dispatch(addToBasket({
      product: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
        quantity: getItemQuantity(basket, id) + 1
      },
      type: 'ADD_TO_BASKET'
    }))};

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p> 
        <div className='product__rating'>
          {Array(rating)
            .fill('')
            .map( (_,i) => (
              <p>⭐</p>
            ))
          }
        </div> 
      </div>

      <img 
        src={image}
        alt=''
      />
      <button onClick={ onAddToBasket }>Add To Basket</button>
    </div>
  )
};

export default Product;