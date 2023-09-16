import React from "react";
import { useCartContext } from './CartContext';

const CartItem = ({ id, name, img, quantity, price }) => {
  const subtotal = quantity * price;
  
  const { addItem, removeItem } = useCartContext();

  const handleNewQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      addItem({ id, name, price, img }, newQuantity - quantity);
    } else {
      removeItem(id);
    }
  };

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className="cart-item flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center">
        <img src={img} alt="" className="w-12 h-12 object-cover mr-4" />
        <div className="cart-item-details">
          <h4>{name}</h4>
          <div className="flex items-center"> 
            <button
              onClick={() => handleNewQuantity(quantity - 1)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1/2 rounded-full"
              
            >
              -
            </button>
            <p className="text-lg font-semibold mx-2">{quantity}</p>
            <button
              onClick={() => handleNewQuantity(quantity + 1)}
              className="bg-green-500 hover:bg-green-600 text-white px-2 py-1/2 rounded-full"
              
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <p className="text-lg font-semibold">${subtotal}</p>
        <button
          onClick={handleRemoveItem}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded ml-4"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
