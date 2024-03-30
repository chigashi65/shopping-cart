import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/actions';

const ShoppingCart = ({ cart, removeFromCart }) => {
      // Calculate total amount
      const totalAmount = cart.reduce((total, item) => total + item.price, 0);

      return (
            <div>
                  <h2>Shopping Cart</h2>
                  <ul>
                        {cart.map(item => (
                              <li key={item.id}>
                                    {item.name} - ${item.price} <button onClick={() => removeFromCart(item.id)}>Remove</button>
                              </li>
                        ))}
                  </ul>
                  <p>Total: ${totalAmount.toFixed(2)}</p> {/* Display total amount */}
            </div>
      );
};

const mapStateToProps = (state) => {
      return {
            cart: state.cart
      };
};

export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);
