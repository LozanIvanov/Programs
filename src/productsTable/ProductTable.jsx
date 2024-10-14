import { useState } from 'react';
import  "./ProductTable.css";

export default function FilterableProductTable( {products} ) 
{

  return (
    <div>
      <ProductTable 
        products={products} />
    </div>
  );
}
function ProductTable({ products }) {

    const categorizedProducts = {};
  
    products.forEach((product) => {
      if (!categorizedProducts[product.category]) {
        categorizedProducts[product.category] = []; 
      }
      categorizedProducts[product.category].push(product); 
    });
  
    const rows = [];
  
    Object.keys(categorizedProducts).forEach((category) => {

      rows.push(
        <ProductCategoryRow category={category} key={category} />
      );
  
      const sortedProducts = categorizedProducts[category].sort((a, b) => {
        return a.name.localeCompare(b.name); 
      });
  
      sortedProducts.forEach((product) => {
        rows.push(
          <ProductRow product={product} key={product.name} />
        );
      });
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  
  function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
  
  function ProductRow({ product }) {
    const name = product.stocked ? product.name : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );
  
    return (
      <tr>
        <td>{name}</td>
        <td className='price'>{product.price}</td>
      </tr>
    );
  }
  