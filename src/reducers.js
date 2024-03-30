const initialState = {
      items: [
            { id: 1, name: 'Item 1', price: 10 },
            { id: 2, name: 'Item 2', price: 20 },
            { id: 3, name: 'Item 3', price: 30 }
      ],
      cart: []
};

const rootReducer = (state = initialState, action) => {
      switch (action.type) {
            case 'ADD_TO_CART':
                  return {
                        ...state,
                        cart: [...state.cart, action.payload]
                  };
            case 'REMOVE_FROM_CART':
                  return {
                        ...state,
                        cart: state.cart.filter(item => item.id !== action.payload)
                  };
            default:
                  return state;
      }
};

export default rootReducer;
