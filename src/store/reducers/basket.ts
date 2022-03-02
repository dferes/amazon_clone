import { createSlice }  from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IBasketProduct ,IProduct, IState, StateAction } from '../../types';
  

const initialState = {
  basket: []  
};


export const getBasketTotal = (basket: IState['basket']) => (
  basket?.reduce((amount: number, item: IBasketProduct) => item.price*item.quantity + amount, 0)
);


export const getItemQuantity = (basket: IState['basket'], id: number) => (
  basket?.reduce( (quant: number, item: IProduct) => item.id === id? quant += 1: quant += 0 , 0)
);


export const getBasketQuantity = (basket: IState['basket']) => (
  basket?.reduce( (numItems: number, item: IBasketProduct) => numItems += item.quantity , 0) 
);


const removeFromBasket_ = (state: IState, action: PayloadAction<StateAction>) => {
  const index = state.basket.findIndex( (item: IProduct) => item.id === action.payload.product.id);
  let newBasket = [...state.basket];
    
  if (index >= 0) {
    newBasket.splice(index, 1);  
  } else {
    console.warn(`Can't remove product (id: ${action.payload.product.id}. Item not in the basket)`);
  }
  state.basket = newBasket
};


const increaseItemQuantity_ = (state: IState, index: number) => {
  let newItem = state.basket[index];
  state.basket.splice(index, 1);
  newItem.quantity += 1;
  state.basket.splice(index, 0, newItem);
};


const decreaseItemQuantity_ = (state: IState, index: number) => {
  let newItem = state.basket[index];
  state.basket.splice(index, 1);
  newItem.quantity -= 1;
  state.basket.splice(index, 0, newItem);
};


export const basketSlice = createSlice({
  name: 'basket',
  initialState: { basket: initialState['basket'] = [] },
  reducers: { 
    addToBasket: (state: IState, action: PayloadAction<StateAction> ) => {
      const index = state.basket.findIndex( (item: IProduct) => item.id === action.payload.product.id);
      if (index >= 0){
        increaseItemQuantity_(state, index); 
      } else {
        state.basket = [
          ...state.basket, 
          action.payload.product
        ]
      }
    },
    removeFromBasket: (state: IState, action: PayloadAction<StateAction> ) => {
      removeFromBasket_(state, action);
    },
    increaseItemQuantity: (state: IState, action: PayloadAction<StateAction> ) => {
      increaseItemQuantity_(state, state.basket.findIndex( (item: IProduct) => item.id === action.payload.product.id) );
    },
    decreaseItemQuantity: (state: IState, action: PayloadAction<StateAction> ) => {
      const index = state.basket.findIndex( (item: IProduct) => item.id === action.payload.product.id);
      if (state.basket[index].quantity > 1){
        decreaseItemQuantity_(state, index );
      } else {
        removeFromBasket_(state, action);
      }

    }
  }
});


export const selectProducts = (state: RootState) => state.basket.basket;       // State Access   (Get)
 
export const { 
  addToBasket, 
  removeFromBasket, 
  increaseItemQuantity, 
  decreaseItemQuantity 
} = basketSlice.actions;                                                       // State Mutators (Set)
