import { useState } from 'react'
import './App.css'
import TicTocToe from './Tic-Tac-Toe/AppGameTic'
import FilterableProductTable from './productsTable/ProductTable'

function App() {

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Fruits", price: "$1", stocked: true, name: "Banana" },
  ];
  

  return (
    <>
      <FilterableProductTable products={PRODUCTS}/>
    </>
  )
}

export default App
