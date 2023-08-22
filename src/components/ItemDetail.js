import React from 'react'

const ItemDetail = ({ name, img, category, description, price, stock }) => {
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
            <footer>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
                Agregar al Carrito
                </button>
            </footer>
            </div>
        </article>
      </div>
    );
};
  
export default ItemDetail;