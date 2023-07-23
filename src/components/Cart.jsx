import '../styles/products.css'

const Cart = ({products, visible}) => {
  
  let total=0;
  let prodGroup=[]; 
  
  products.forEach(product => {
      total+=product.price
  })
     products.forEach(item =>{
      const duplicateEntry = prodGroup.find(dItem => item.id === dItem.id)
      if(duplicateEntry){
        duplicateEntry.quantity++
        duplicateEntry.totalPrice+=item.price
      }else{
        prodGroup.push({
          id: item.id,
          name: item.title,
          quantity: 1,
          totalPrice: item.price
        })}})
    if(visible){
    return (
      <div className='modal'>
        <div className="window">
          <div className='header-cart'>Carrito de compras</div>
          <table>
            {prodGroup.map((product,i) =>(
                <tr key={i}><td>{product.quantity}u.</td><td> {product.name}</td><td> U$S {product.totalPrice}</td></tr>
            ))}
          </table>
          <hr />
          <div className="container">
              <h3>Total:</h3> <h3>U$S {total.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    )
    }
}

export default Cart