import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="flex flex-col p-4 border border-gray-300 mb-4 w-3/4">
            <div className="mb-2">
                <img src={img} alt={name} className="w-full h-48 object-contain rounded-lg zoomable-image" />
            </div>
            <div className="flex-grow">
                <header className="mb-2">
                    <h2 className="text-md font-semibold">{name}</h2>
                </header>
                <section className="mb-2">
                    <p className="text-gray-600 text-sm">Precio: ${price}</p>
                    <p className="text-gray-600 text-sm">Stock Disponible: {stock}</p>
                </section>
                <footer>
                    <Link to={`/item/${id}`} className="bg-green-800 text-white text-xs px-2 py-1 rounded hover:bg-green-600">Ver Detalle</Link>
                </footer>
            </div>
        </article>
    );
};

export default Item;
