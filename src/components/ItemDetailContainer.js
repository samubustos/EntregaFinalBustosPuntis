import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from "../asyncMock"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    const {itemId} = useParams()

    useEffect(()=> {
        getProductsById(itemId)
            .then(response =>{
                setProducts(response)
            })
            .catch (error =>{
                console.error(error)
            })
    },[itemId])
    return (
        <div>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer