import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="flex items-center mt-4">
          <button className="bg-green-600 hover:bg-gray-400 text-white rounded-full px-3 py-1" onClick={decrement}>
            -
          </button>
          <h1 className="text-xl font-semibold mx-4">{quantity}</h1>
          <button className="bg-green-600 hover:bg-green-300 text-white rounded-full px-3 py-1" onClick={increment}>
            +
          </button>
          <button
            className={`flex items-center ${
              stock
                ? 'bg-green-600 hover:bg-green-300'
                : 'bg-gray-300 cursor-not-allowed'
            } text-white rounded-full px-4 py-2 ml-4`}
            onClick={() => onAdd(quantity)}
            disabled={!stock}
          >
          <span class="material-symbols-outlined text-xl mr-2">shopping_bag</span>
          Agregar al carrito
          </button>
          
        </div>
    );
};
 
export default ItemCount;