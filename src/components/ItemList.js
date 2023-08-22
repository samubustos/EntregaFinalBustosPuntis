import React from 'react';
import Item from './Item'; // Asegúrate de tener la ruta correcta para importar tu componente Item

const ItemList = ({ products }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {products.map((prod) => (
                <div key={prod.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 ">
                    <Item {...prod} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;