import MateCamionero from './components/Assets/mate-camionero.jpg'
import MateTorpedo from './components/Assets/mate-torpedo.jpg'
import TermoStanley from './components/Assets/termo-stanley.jpg'
import MateraClasica from './components/Assets/matera-cuero.jpg';

const products = [
    {
        id: '1',
        name: 'Mate Camionero',
        price: 5000,
        category: 'mates',
        img: MateCamionero,
        stock: 10,
        description: 'Mate de calabaza con virola de alpaca'
    },
    {
        id: '2',
        name: 'Mate Torpedo',
        price: 5000,
        category: 'mates',
        img: MateTorpedo,
        stock: 10,
        description: 'Mate de calabaza con virola de alpaca'
    },
    {
        id: '3',
        name: 'Termo Stanley',
        price: 15000,
        category: 'termos',
        img: TermoStanley,
        stock: 10,
        description: 'Termo stanley blanco 1lt'
    },
    {
        id: '4',
        name: 'Matera Clasica',
        price: 10000,
        category: 'materas',
        img: MateraClasica,
        stock: 10,
        description: 'Matera de cuero clasica'
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        },500)
    })
}


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(product => product.category === category);
        resolve(filteredProducts);
        
        }, 500);
    });
};
  
export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(product => product.id === id);
            resolve(product);
        }, 500);
    });
};  

