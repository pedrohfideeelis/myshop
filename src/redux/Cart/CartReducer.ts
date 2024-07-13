import { Product } from "../../components/Product/Product";

interface CartState {
  cart: Product[];
}

const initalState: CartState = {
  cart: [],
};

interface CartAction {
  type: string;
  payload: Product;
}

export function cartReducer(state = initalState, action: CartAction) {
  switch (action.type) {
    case "cart/add-product":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "cart/remove-product":
      const productToRemove = action.payload;
      const cartFiltred = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      return {
        ...state,
        cart: cartFiltred,
      };
    default:
      return state;
  }
}
