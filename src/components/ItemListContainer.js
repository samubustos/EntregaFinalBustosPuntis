import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock"
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../asyncMock"



const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()
  
  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  },[categoryId])
  
  return (
    <div className="center-container">
        <h1 className="center-text my-10 text-green-900 ">{greeting}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer