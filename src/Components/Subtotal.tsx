import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketQuantity, getBasketTotal } from '../store/reducers/basket';
import { useSelector } from 'react-redux';
import { selectProducts } from '../store/reducers/basket';
import { useNavigate } from 'react-router';



const Subtotal: React.FC = () => {
  const basket = useSelector(selectProducts);  
  const navigate = useNavigate(); 

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={ value => (
          <>
            <p>
              Subtotal ({ getBasketQuantity(basket) } items):
              <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={e => navigate('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal;