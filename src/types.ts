export interface IProduct {
  id: number
  title: string
  price: number
  image: string
  rating: number
};


export interface IBasketProduct {
  id: number
  title: string
  price: number
  image: string
  rating: number
  quantity: number
}
  

export interface IState {
  basket: IBasketProduct[]
};


export type StateAction = {
  product: IBasketProduct
  type: 
  | 'ADD_TO_BASKET' 
  | 'REMOVE_FROM_BASKET' 
  | 'INCREASE_ITEM_QUANT' 
  | 'DECREASE_ITEM_QUANT'
};


export type DispatchType = ( args: StateAction ) => StateAction;
