import React,{useState, useEffect} from 'react'
import Products from './components/Products'

function App() {
  const [products, setProducts]=useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then(res =>{
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Error al obtener los productos');
            }
          })
        .then(data => setProducts(data))
        .catch(err => console.log(err))
        },[]);

  return (
    <>
       <Products products={products}/>
    </>
  )
}

export default App
