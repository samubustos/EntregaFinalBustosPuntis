import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import {Timestamp, addDoc, collection, documentId, query, where, writeBatch, getDocs} from "firebase/firestore";
import { db } from "../firebase"
import CheckoutForm from "./CheckoutForm"
import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [error, setError] = useState(null);


    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
    
        try {
            const objOrder = {
                buyer: {
                name,
                phone,
                email,
                },
                items: cart,
                total: total,
                data: Timestamp.fromDate(new Date()),
            };
    
            const batch = writeBatch(db);
    
            const outOfStock = [];
        
            const ids = cart.map((prod) => prod.id);
        
            const productsRef = collection(db, "products");
        
            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            );
    
            const { docs } = productsAddedFromFirestore;
    
            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
    
                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
    
                if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });
    
            if (outOfStock.length === 0) {
                await batch.commit();
    
                const orderRef = collection(db, "orders");
        
                const orderAdded = await addDoc(orderRef, objOrder);
        
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                setError("No hay existencias disponibles de algunos productos.");
            }

        } catch (error) {
          setError("Hubo un problema al gestionar tu pedido.");
          console.error(error);
        } finally {
          setLoading(false);
        }
    };
    

    if(loading){
        return <div className="center-container">
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-2 font-semibold text-green-800">Procesando...</h1>
            <ClipLoader size={50} color={'#018306'} loading={loading} className="mb-20" />
        </div>
        </div>
    }

    if (orderId) {
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-semibold mb-8">¡Compra exitosa!</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl mb-4">Tu número de orden es:</h2>
              <p className="text-6xl font-bold text-green-500 mb-12">{orderId}</p>
              <p className="text-2xl">¡Gracias por confiar en nosotros!</p>
              <Link to="/">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 mt-8 rounded-full">
                  Volver a la tienda
                </button>
              </Link>
            </div>
          </div>
        );
    }
      
     
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold mt-10 mb-6">Checkout</h1>
            <CheckoutForm onConfirm={createOrder} /> {/* Aquí pasa la función como prop */}
        </div>
    );
}
 
export default Checkout;