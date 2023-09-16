import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="flex flex-col p-4 border border-gray-300 mb-4 w-3/4">
            <div className="mb-2">
                <Link to={`/item/${id}`}>
                    <img src={img} alt={name} className="w-full h-48 object-contain rounded-lg zoomable-image" />
                </Link>
            </div>
            <div className="flex-grow">
                <header className="mb-2">
                    <h2 className="text-md font-semibold">{name}</h2>
                </header>
                <section className="mb-2">
                    <p className="text-gray-600 text-sm font-semibold">${price}</p>
                    {stock > 0 ? (
                        <p className="text-gray-600 text-sm">Unidades disponibles: {stock}</p>
                    ) : (
                        <p className="text-green-800 text-sm font-semibold">No hay stock disponible</p>
                    )}
                </section>
                <footer>
                    <Link to={`/item/${id}`} className="bg-green-600 text-white text-xs px-2 py-1 rounded-full hover:bg-green-500">Ver Detalle</Link>
                </footer>
            </div>
        </article>
    );
};

export default Item;
