import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts, getBasketQuantity } from '../store/reducers/basket';


const Header: React.FC = () => {
  const basket = useSelector(selectProducts);  

  return (
    <div className='header'>
      <Link to='/'>
        <img 
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
          alt=''
          className='header__logo'
        /> 
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' />
        <SearchIcon className='header__searchIcon'/>  
      </div> 
        
      <div className='header__nav'>
      {/* <Link to='/login'>   */}
        <Link to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLineTwo'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineTwo'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        {/* </Link> */}
      </div>

      <Link to='/checkout'>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__basketCount'>{getBasketQuantity(basket)}</span>
        </div>
      </Link>
    </div>  
  );
};

export default Header;