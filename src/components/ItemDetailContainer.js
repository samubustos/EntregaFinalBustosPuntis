import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'

import {getDoc, doc} from 'firebase/firestore'
import { db } from '../firebase'

import { ClipLoader } from 'react-spinners'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()


    useEffect(() =>{
        setLoading(true)
        

        const docRef = doc(db,'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProducts(productsAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId])


    return (
        <div className='center-container'>
            {loading ? (
                <div className="flex flex-col justify-center items-center">
                <h1 className="mb-2 font-semibold text-green-800">Cargando</h1>
                <ClipLoader size={50} color={'#018306'} loading={loading} className="mb-20" />
                </div>
            ) : (
                <ItemDetail {...products} />
            )}
        </div>
    )
}


export default ItemDetailContainer