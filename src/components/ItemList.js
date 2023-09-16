import React from 'react';
import Item from './Item'; 

const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((prod) => (
                <div key={prod.id} className="flex justify-center">
                    <Item {...prod} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;
