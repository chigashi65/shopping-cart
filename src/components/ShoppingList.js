import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/actions';

const ShoppingList = ({ items, addToCart }) => {
      return (
            <div>
                  <h2>Shopping List</h2>
                  <ul>
                        {items.map(item => (
                              <li key={item.id}>
                                    {item.name} - ${item.price} <button onClick={() => addToCart(item)}>Add to Cart</button>
                              </li>
                        ))}
                  </ul>
            </div>
      );
};

const mapStateToProps = (state) => {
      return {
            items: state.items
      };
};

export default connect(mapStateToProps, { addToCart })(ShoppingList);
