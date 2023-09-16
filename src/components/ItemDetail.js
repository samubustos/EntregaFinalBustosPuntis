import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../index.scss'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img
        }

        addItem(item, quantity)
    }

    return (
        <div className="flex justify-center items-center mt-20">
            <article className="flex flex-col md:flex-row border border-gray-300 mb-4 w-full md:w-3/4 mx-auto p-4 rounded-lg shadow-md">
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <img src={img} alt={name} className="w-full h-64 object-contain rounded-lg" />
                </div>
                <div className="md:w-2/3 md:pl-4 flex flex-col">
                    <header className="mb-2">
                        <h2 className="text-xl font-semibold">{name}</h2>
                    </header>
                    <section className="mb-2">
                        <p className="text-gray-600 text-sm mb-1">Categoría: {category}</p>
                        <p className="text-gray-800 text-sm mb-1">Descripción: {description}</p>
                        <p className="text-green-600 text-lg font-semibold">${price}</p>
                    </section>
                    <footer className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4">
                            {quantityAdded > 0 ? (
                                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full ">
                                    <Link to='/cart' >Finalizar Compra</Link>
                                </button>
                                
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )}
                        </div>
                        
                        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full flex items-center">
                            <span className="material-symbols-outlined">keyboard_arrow_left</span>
                            <Link to="/" className='ml-2'>Volver a la tienda</Link>
                        </button>
                        
                    </footer>
                </div>
            </article>
        </div>
    );
};

export default ItemDetail;
