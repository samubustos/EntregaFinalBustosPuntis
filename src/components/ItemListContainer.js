import React, { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../firebase";
import { ClipLoader } from 'react-spinners'; 

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="center-container">
      <h1 className="center-text my-10 text-green-900 ">{greeting}</h1>
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-2 font-semibold text-green-800">Cargando</h1>
          <ClipLoader size={50} color={'#018306'} loading={loading} className="mb-20" />
        </div>
      ) : (
        <div className="mb-20"> 
          <ItemList products={products} />
        </div>
      )}
    </div>
  )
}
  

export default ItemListContainer;