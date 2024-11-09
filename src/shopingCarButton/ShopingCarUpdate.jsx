import { useState } from 'react';

export default function ShoppingCart() {
  const[item,setItem]=useState('')
  const [
    products,
    setProducts
  ] = useState([])

  function handleIncreaseClick(productId) {
    setProducts(products.map(x=>
      x.id===productId ?
        {...x,count: x.count+1} : x
      ))
  }
  function handleMinus(productId){
     setProducts(products.map(x=>
      x.id===productId ?
        {...x,count:Math.max(x.count-1, 0)} : x
      ))
  }
  function newItem(e){
    setItem(e.target.value)
  }
  function addItem(){
    if(item.trim()===''){
      return;
    }
    const product={
      id:products.length,
      name: item,
       count: 1
    }
  setProducts([...products,product]);
  setItem('')
  }

  return (
    <>
   <input
     value={item}
       onChange={newItem}
     />
      <button onClick={addItem}>Add</button>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id)
          }}>
            +
          </button>
            <button onClick={() => {
            handleMinus(product.id)
          }}>
            -
          </button>
        </li>
      ))}
    </ul>
       </>
  );
}
